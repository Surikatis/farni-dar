// api/liturgie.js
// Vercel serverless funkce – načítá nedělní liturgii z vira.cz

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  try {
    // Krok 1: Načti rozcestník a najdi odkaz na nejbližší neděli
    const indexRes = await fetch("https://www.vira.cz/Nedelni-liturgie", {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; FarniDar/1.0)",
        "Accept-Language": "cs-CZ,cs;q=0.9",
      },
    });
    const indexHtml = await indexRes.text();

    // Najdi odkaz na "Následující neděli" nebo první nadcházející neděli
    // Struktura: <a href="/2-nedele-velikonocni-cyklus-a-1.html">Následující neděle</a>
    // nebo: #### 12. 4. 2026  [2. neděle velikonoční...](URL)
    let sundayUrl = null;

    // Hledáme odkaz "Následující neděle"
    const nextMatch = indexHtml.match(/href="([^"]+)"[^>]*>Následující neděle</);
    if (nextMatch) {
      sundayUrl = "https://www.vira.cz" + nextMatch[1];
    }

    // Záloha: hledáme první odkaz na stránku s čteními v sekci rychlé volby
    if (!sundayUrl) {
      const quickMatch = indexHtml.match(/href="(\/[a-z0-9\-]+\.html)"[^>]*>Neděle</);
      if (quickMatch) {
        sundayUrl = "https://www.vira.cz" + quickMatch[1];
      }
    }

    // Záloha 2: vezmi první .html odkaz v oblasti výpisu nedělí
    if (!sundayUrl) {
      const listMatch = indexHtml.match(/href="(\/[a-z0-9\-]+-cyklus-[abc]-\d+\.html)"/i);
      if (listMatch) {
        sundayUrl = "https://www.vira.cz" + listMatch[1];
      }
    }

    if (!sundayUrl) {
      return res.status(200).json({ error: "no_sunday_url", sections: [] });
    }

    // Krok 2: Načti stránku s čteními
    const pageRes = await fetch(sundayUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; FarniDar/1.0)",
        "Accept-Language": "cs-CZ,cs;q=0.9",
      },
    });
    const html = await pageRes.text();

    // Pomocná funkce: vyčisti HTML tagy a entity
    function stripHtml(s) {
      return s
        .replace(/<br\s*\/?>/gi, "\n")
        .replace(/<p[^>]*>/gi, "\n")
        .replace(/<\/p>/gi, "\n")
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

    // Pomocná funkce: extrahuj blok mezi dvěma h4 nadpisy
    function extractBlock(html, startPattern, endPatterns) {
      const startMatch = html.search(startPattern);
      if (startMatch === -1) return "";

      let endIdx = html.length;
      for (const ep of endPatterns) {
        const m = html.slice(startMatch + 10).search(ep);
        if (m !== -1 && startMatch + 10 + m < endIdx) {
          endIdx = startMatch + 10 + m;
        }
      }
      return html.slice(startMatch, endIdx);
    }

    const sections = [];
    const h4End = [/<h4/i, /<h3/i, /<h2/i];

    // Název neděle
    const titleMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/s);
    const title = titleMatch ? stripHtml(titleMatch[1]) : "Nedělní liturgie";

    // Datum
    const dateMatch = html.match(/(\d{1,2}\.\s*\d{1,2}\.\s*\d{4})/);
    const date = dateMatch ? dateMatch[1].trim() : "";

    // 1. ČTENÍ
    const block1 = extractBlock(html, /<h4[^>]*>.*?1\.\s*ČTENÍ.*?<\/h4>/si, h4End);
    if (block1) {
      // Ref = první <strong> nebo text na samostatném řádku jako "Sk 2,42-47"
      const refMatch = block1.match(/<strong>([^<]{3,30})<\/strong>/) ||
                       block1.match(/([A-Z][a-z]{1,3}\s+\d+[,\.\d\-]+)/);
      const ref = refMatch ? refMatch[1].trim() : "";

      // Intro = první <p> text
      const introMatch = block1.match(/<h4[^>]*>.*?<\/h4>\s*<p[^>]*>(.*?)<\/p>/si);
      const intro = introMatch ? stripHtml(introMatch[1]) : "";

      // Text = vše po referenci
      const textStart = refMatch ? block1.indexOf(refMatch[0]) + refMatch[0].length : block1.indexOf("</h4>") + 5;
      const text = stripHtml(block1.slice(textStart));

      if (text.length > 50) {
        sections.push({ type: "1. čtení", ref, intro, text });
      }
    }

    // ŽALM
    const blockZ = extractBlock(html, /<h4[^>]*>.*?ŽALM.*?<\/h4>/si, h4End);
    if (blockZ) {
      const refMatch = blockZ.match(/Žl\s+[\d,\.\-]+[a-z]*/i);
      const ref = refMatch ? refMatch[0].trim() : "";
      const introMatch = blockZ.match(/<h4[^>]*>.*?<\/h4>\s*<p[^>]*>(.*?)<\/p>/si);
      const intro = introMatch ? stripHtml(introMatch[1]) : "";
      const textStart = blockZ.indexOf("</h4>") + 5;
      const text = stripHtml(blockZ.slice(textStart));
      if (text.length > 20) {
        sections.push({ type: "Žalm", ref, intro, text });
      }
    }

    // 2. ČTENÍ
    const block2 = extractBlock(html, /<h4[^>]*>.*?2\.\s*ČTENÍ.*?<\/h4>/si, h4End);
    if (block2) {
      const refMatch = block2.match(/<strong>([^<]{3,30})<\/strong>/) ||
                       block2.match(/([A-Z][a-z]{1,3}\s+\d+[,\.\d\-]+)/);
      const ref = refMatch ? refMatch[1].trim() : "";
      const introMatch = block2.match(/<h4[^>]*>.*?<\/h4>\s*<p[^>]*>(.*?)<\/p>/si);
      const intro = introMatch ? stripHtml(introMatch[1]) : "";
      const textStart = refMatch ? block2.indexOf(refMatch[0]) + refMatch[0].length : block2.indexOf("</h4>") + 5;
      const text = stripHtml(block2.slice(textStart));
      if (text.length > 50) {
        sections.push({ type: "2. čtení", ref, intro, text });
      }
    }

    // EVANGELIUM
    const blockE = extractBlock(html, /<h4[^>]*>.*?EVANGELIUM.*?<\/h4>/si, h4End);
    if (blockE) {
      const refMatch = blockE.match(/<strong>([^<]{3,30})<\/strong>/) ||
                       blockE.match(/([A-Z][a-z]{1,3}\s+\d+[,\.\d\-]+)/);
      const ref = refMatch ? refMatch[1].trim() : "";
      const introMatch = blockE.match(/<h4[^>]*>.*?<\/h4>\s*<p[^>]*>(.*?)<\/p>/si);
      const intro = introMatch ? stripHtml(introMatch[1]) : "";
      const textStart = refMatch ? blockE.indexOf(refMatch[0]) + refMatch[0].length : blockE.indexOf("</h4>") + 5;
      const text = stripHtml(blockE.slice(textStart));
      if (text.length > 50) {
        sections.push({ type: "Evangelium", ref, intro, text });
      }
    }

    if (sections.length === 0) {
      return res.status(200).json({
        error: "parse_failed",
        debug: { sundayUrl, title },
        sections: [],
      });
    }

    return res.status(200).json({ title, date, sundayUrl, sections });

  } catch (err) {
    console.error("liturgie API error:", err);
    return res.status(500).json({ error: err.message, sections: [] });
  }
}
