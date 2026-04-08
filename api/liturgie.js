// api/liturgie.js
// Vercel serverless funkce – stahuje nedělní liturgii z vira.cz

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");

  try {
    const response = await fetch("https://www.vira.cz/Nedelni-liturgie", {
      headers: {
        "User-Agent": "Mozilla/5.0 (compatible; FarniDar/1.0)",
        "Accept": "text/html,application/xhtml+xml",
        "Accept-Language": "cs-CZ,cs;q=0.9",
      },
    });

    if (!response.ok) {
      return res.status(502).json({ error: "Nepodařilo se načíst vira.cz" });
    }

    const html = await response.text();

    // Název neděle / svátku
    const titleMatch = html.match(/<h1[^>]*>(.*?)<\/h1>/s);
    const title = titleMatch
      ? titleMatch[1].replace(/<[^>]+>/g, "").trim()
      : "Nedělní liturgie";

    // Datum
    const dateMatch = html.match(/class="[^"]*datum[^"]*"[^>]*>(.*?)<\/[^>]+>/s)
      || html.match(/(\d{1,2}\.\s*\d{1,2}\.\s*\d{4})/);
    const date = dateMatch
      ? dateMatch[1].replace(/<[^>]+>/g, "").trim()
      : "";

    // Pomocná funkce pro extrakci čtení
    function extractReading(html, patterns) {
      for (const pattern of patterns) {
        const match = html.match(pattern);
        if (match) {
          return match[1]
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
      }
      return "";
    }

    function extractRef(html, patterns) {
      for (const pattern of patterns) {
        const match = html.match(pattern);
        if (match) return match[1].replace(/<[^>]+>/g, "").trim();
      }
      return "";
    }

    // Extrakce čtení podle typických struktur vira.cz
    const sections = [];

    // 1. čtení
    const ref1 = extractRef(html, [
      /1\.\s*čtení.*?<[^>]*ref[^>]*>(.*?)<\//si,
      /První čtení.*?<em>(.*?)<\/em>/si,
      /class="[^"]*cteni-ref[^"]*"[^>]*>(.*?)<\//si,
    ]);
    const text1 = extractReading(html, [
      /1\.\s*čtení[\s\S]*?<div[^>]*class="[^"]*text[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
      /První čtení[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/i,
      /id="cteni1"[^>]*>([\s\S]*?)<\/div>/i,
      /class="[^"]*cteni-1[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    ]);

    if (text1) {
      sections.push({
        type: "1. čtení",
        ref: ref1,
        intro: "",
        text: text1,
      });
    }

    // Žalm
    const refZ = extractRef(html, [
      /[Žž]alm.*?<em>(.*?)<\/em>/si,
      /class="[^"]*zalm-ref[^"]*"[^>]*>(.*?)<\//si,
    ]);
    const textZ = extractReading(html, [
      /[Žž]alm[\s\S]*?<div[^>]*class="[^"]*text[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
      /id="zalm"[^>]*>([\s\S]*?)<\/div>/i,
      /class="[^"]*zalm[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    ]);

    if (textZ) {
      sections.push({
        type: "Žalm",
        ref: refZ,
        intro: "",
        text: textZ,
      });
    }

    // 2. čtení
    const ref2 = extractRef(html, [
      /2\.\s*čtení.*?<em>(.*?)<\/em>/si,
      /Druhé čtení.*?<em>(.*?)<\/em>/si,
      /class="[^"]*cteni2-ref[^"]*"[^>]*>(.*?)<\//si,
    ]);
    const text2 = extractReading(html, [
      /2\.\s*čtení[\s\S]*?<div[^>]*class="[^"]*text[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
      /Druhé čtení[\s\S]*?<div[^>]*>([\s\S]*?)<\/div>/i,
      /id="cteni2"[^>]*>([\s\S]*?)<\/div>/i,
      /class="[^"]*cteni-2[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    ]);

    if (text2) {
      sections.push({
        type: "2. čtení",
        ref: ref2,
        intro: "",
        text: text2,
      });
    }

    // Evangelium
    const refE = extractRef(html, [
      /[Ee]vangelium.*?<em>(.*?)<\/em>/si,
      /class="[^"]*evangelium-ref[^"]*"[^>]*>(.*?)<\//si,
    ]);
    const textE = extractReading(html, [
      /[Ee]vangelium[\s\S]*?<div[^>]*class="[^"]*text[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
      /id="evangelium"[^>]*>([\s\S]*?)<\/div>/i,
      /class="[^"]*evangelium[^"]*"[^>]*>([\s\S]*?)<\/div>/i,
    ]);

    if (textE) {
      sections.push({
        type: "Evangelium",
        ref: refE,
        intro: "",
        text: textE,
      });
    }

    // Pokud se nepodařilo nic extrahovat, vrátíme chybu
    if (sections.length === 0) {
      return res.status(200).json({
        error: "parse_failed",
        title,
        date,
        sections: [],
      });
    }

    return res.status(200).json({ title, date, sections });

  } catch (err) {
    console.error("liturgie API error:", err);
    return res.status(500).json({ error: err.message });
  }
}
