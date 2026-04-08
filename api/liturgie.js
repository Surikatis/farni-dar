// api/liturgie.js
// Vercel serverless funkce – načítá nedělní liturgii z vira.cz

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  try {
    // Krok 1: Najdi odkaz na nejbližší neděli
    const indexRes = await fetch("https://www.vira.cz/Nedelni-liturgie", {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; FarniDar/1.0)", "Accept-Language": "cs-CZ,cs;q=0.9" },
    });
    const indexHtml = await indexRes.text();

    // Hledáme odkaz "Následující neděle" nebo první odkaz na neděli
    let sundayUrl = null;
    const nextMatch = indexHtml.match(/href="([^"]+)"[^>]*>\s*N[aá]sleduj[ií]c[ií] ned[eě]le/i);
    if (nextMatch) sundayUrl = "https://www.vira.cz" + nextMatch[1];

    if (!sundayUrl) {
      const quickMatch = indexHtml.match(/href="(\/[a-z0-9\-]+-cyklus-[abc]-\d+\.html)"/i);
      if (quickMatch) sundayUrl = "https://www.vira.cz" + quickMatch[1];
    }

    if (!sundayUrl) return res.status(200).json({ error: "no_sunday_url", sections: [] });

    // Krok 2: Načti stránku s čteními
    const pageRes = await fetch(sundayUrl, {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; FarniDar/1.0)", "Accept-Language": "cs-CZ,cs;q=0.9" },
    });
    const html = await pageRes.text();

    // Vyčisti HTML tagy a entity
    function stripHtml(s) {
      return s
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<\/p>/gi, "\n")
        .replace(/<p[^>]*>/gi, "")
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#[0-9]+;/g, "")
        .replace(/\n{3,}/g, "\n\n")
        .trim();
    }

    // Zpracuj jednu sekci čtení
    function parseSection(content, type, forcedRef) {
      // Intro = první odstavec (kontext čtení)
      const pMatch = content.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
      const intro = pMatch ? stripHtml(pMatch[1]).trim() : "";

      // Reference = vzor jako "Sk 2,42-47" nebo "1 Petr 1,3-9" nebo "Jan 20,19-31"
      let ref = forcedRef || "";
      let refIdx = -1;

      if (!ref) {
        // Hledáme reference v HTML - zkusíme <strong> první, pak plain text
        const strongMatch = content.match(/<strong>([^<]{4,25})<\/strong>/);
        const plainMatch = content.match(/\b([1-3]?\s*[A-ZÁČŽŠŘĚÍÓÝÚ][a-záčžšřěíýúůóéď]{1,5}\s+\d+,[\d\.,\-a-z]+)/u);

        if (strongMatch && /\d/.test(strongMatch[1])) {
          ref = strongMatch[1].trim();
          refIdx = content.indexOf(strongMatch[0]);
        } else if (plainMatch) {
          ref = plainMatch[1].trim();
          refIdx = content.indexOf(plainMatch[0]);
        }
      }

      // Text začíná ZA referencí
      let textContent = content;
      if (refIdx !== -1) {
        // Najdi konec reference v HTML a vezmi obsah za ní
        const refEndInHtml = refIdx + (content.indexOf(ref, refIdx) !== -1
          ? content.indexOf(ref, refIdx) - refIdx + ref.length
          : ref.length + 20);
        textContent = content.slice(refEndInHtml);
      } else if (pMatch) {
        // Bez reference – text začíná za prvním odstavcem (intro)
        textContent = content.slice(content.indexOf(pMatch[0]) + pMatch[0].length);
      }

      const text = stripHtml(textContent).trim();
      if (text.length < 30) return null;
      return { type, ref, intro, text };
    }

    // Rozdělení HTML po <h4> tagech — nejspolehlivější přístup
    const sections = [];
    const h4Parts = html.split(/<h4[^>]*>/i);

    const title_match = html.match(/<h1[^>]*>(.*?)<\/h1>/s);
    const title = title_match ? stripHtml(title_match[1]) : "Nedělní liturgie";
    const dateMatch = html.match(/(\d{1,2}\.\s*\d{1,2}\.\s*\d{4})/);
    const date = dateMatch ? dateMatch[1].trim() : "";

    for (let i = 1; i < h4Parts.length; i++) {
      const closingIdx = h4Parts[i].indexOf("</h4>");
      if (closingIdx === -1) continue;

      const headingRaw = h4Parts[i].slice(0, closingIdx);
      const heading = stripHtml(headingRaw).trim();
      const content = h4Parts[i].slice(closingIdx + 5);

      if (/^1\.\s*ČTENÍ/i.test(heading)) {
        const s = parseSection(content, "1. čtení");
        if (s) sections.push(s);

      } else if (/^ŽALM/i.test(heading)) {
        // Reference je součástí nadpisu: "ŽALM Žl 118,2-4.13-15.22-24"
        const refInHeading = heading.match(/Žl\s+[\d,\.\-\+a-z]+/i);
        const s = parseSection(content, "Žalm", refInHeading ? refInHeading[0] : "");
        if (s) sections.push(s);

      } else if (/^2\.\s*ČTENÍ/i.test(heading)) {
        const s = parseSection(content, "2. čtení");
        if (s) sections.push(s);

      } else if (/^EVANGELIUM$/i.test(heading)) {
        const s = parseSection(content, "Evangelium");
        if (s) sections.push(s);
      }
    }

    if (sections.length === 0) {
      return res.status(200).json({ error: "parse_failed", debug: { sundayUrl, title }, sections: [] });
    }

    return res.status(200).json({ title, date, sundayUrl, sections });

  } catch (err) {
    console.error("liturgie error:", err);
    return res.status(500).json({ error: err.message, sections: [] });
  }
}
