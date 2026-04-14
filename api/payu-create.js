// api/payu-create.js
// Vercel serverless funkce – vytvoří platební objednávku u PayU
// a vrátí URL pro přesměrování uživatele na platební bránu.

const POS_ID = "4427021";
const CLIENT_ID = "4427021";
const CLIENT_SECRET = "7514638007df124c07008a298fb443a7";
const PAYU_API = "https://secure.payu.com";

async function getAccessToken() {
  const res = await fetch(`${PAYU_API}/pl/standard/user/oauth/authorize`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`OAuth failed: ${res.status} ${text}`);
  }
  const data = await res.json();
  return data.access_token;
}

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://farnidar.cz");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { amount, churchName, churchId, churchCity, buyerEmail } = req.body;

  if (!amount || amount < 20 || amount > 100000) {
    return res.status(400).json({ error: "Neplatna castka (20–100 000 Kc)" });
  }
  if (!churchId || !churchName) {
    return res.status(400).json({ error: "Chybi identifikace kostela" });
  }

  const paymentRef = `DAR-${String(churchId).padStart(4, "0")}`;
  const amountHalere = Math.round(amount * 100);

  // UPRAVENO: extOrderId obsahuje i město — viditelné v PayU dashboardu
  // Format: DAR-0035-Nymburk-1744123456789
  const citySlug = (churchCity || "").replace(/\s+/g, "-");
  const orderId = `${paymentRef}-${citySlug}-${Date.now()}`;

  const notifyUrl = `https://farnidar.cz/api/payu-notify`;
  const continueUrl = `https://farnidar.cz/platba-dokoncena?ref=${paymentRef}&amount=${amount}`;

  try {
    const token = await getAccessToken();

    const orderPayload = {
      notifyUrl,
      customerIp: req.headers["x-forwarded-for"] || req.socket?.remoteAddress || "127.0.0.1",
      merchantPosId: POS_ID,
      // UPRAVENO: description obsahuje město
      description: `Dar farnosti – ${churchName}, ${churchCity || ""}`,
      currencyCode: "CZK",
      totalAmount: String(amountHalere),
      extOrderId: orderId,
      buyer: buyerEmail ? { email: buyerEmail } : undefined,
      products: [
        {
          // UPRAVENO: name obsahuje město
          name: `Dar farnosti – ${churchName}, ${churchCity || ""}`,
          unitPrice: String(amountHalere),
          quantity: "1",
        },
      ],
      continueUrl,
    };

    const orderRes = await fetch(`${PAYU_API}/api/v2_1/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      redirect: "manual",
      body: JSON.stringify(orderPayload),
    });

    if (orderRes.status === 302 || orderRes.status === 201) {
      const redirectUrl =
        orderRes.headers.get("location") ||
        (await orderRes.json().then((d) => d.redirectUri).catch(() => null));

      if (!redirectUrl) {
        throw new Error("PayU nevratilo redirect URL");
      }

      return res.status(200).json({ redirectUrl, orderId });
    }

    const errBody = await orderRes.text();
    throw new Error(`PayU order error: ${orderRes.status} ${errBody}`);
  } catch (err) {
    console.error("payu-create error:", err);
    return res.status(500).json({ error: err.message });
  }
}
