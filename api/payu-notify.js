// api/payu-notify.js
// Vercel serverless funkce – PayU sem pošle POST po každé změně stavu platby.
// Musí odpovědět 200 OK, jinak PayU bude opakovat.

import crypto from "crypto";

const MD5_KEY = "4c289385bf41bbfcd29a9dd1e0f92b58";

// Ověření PayU podpisu (OpenPayU-Signature hlavička)
function verifySignature(body, signatureHeader) {
  if (!signatureHeader) return false;
  // Formát: "sender=checkout;signature=HASH;algorithm=MD5;version=2.1"
  const parts = Object.fromEntries(
    signatureHeader.split(";").map((p) => p.split("="))
  );
  if (!parts.signature) return false;

  const expected = crypto
    .createHash("md5")
    .update(body + MD5_KEY)
    .digest("hex");

  return parts.signature.toLowerCase() === expected.toLowerCase();
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  // Tělo jako string pro ověření podpisu
  const rawBody =
    typeof req.body === "string" ? req.body : JSON.stringify(req.body);

  const signatureHeader = req.headers["openpayu-signature"];

  if (!verifySignature(rawBody, signatureHeader)) {
    console.error("PayU notify: neplatný podpis", signatureHeader);
    return res.status(401).json({ error: "Invalid signature" });
  }

  const notification = typeof req.body === "string"
    ? JSON.parse(req.body)
    : req.body;

  const order = notification?.order;
  if (!order) return res.status(400).json({ error: "Missing order" });

  const { orderId, extOrderId, status, totalAmount, currencyCode } = order;

  console.log(`PayU notify: ${extOrderId} → ${status} (${totalAmount / 100} ${currencyCode})`);

  // Stavy: PENDING, WAITING_FOR_CONFIRMATION, COMPLETED, CANCELED, REJECTED
  if (status === "COMPLETED") {
    // TODO: až budete mít databázi (Supabase), zde uložte záznam o platbě:
    // await supabase.from('payments').insert({
    //   order_id: orderId,
    //   ext_order_id: extOrderId,
    //   amount: totalAmount / 100,
    //   currency: currencyCode,
    //   status: 'completed',
    //   church_ref: extOrderId.split('-').slice(0,2).join('-'),
    //   created_at: new Date().toISOString(),
    // });
    console.log(`✅ Platba dokončena: ${extOrderId}, ${totalAmount / 100} Kč`);
  }

  if (status === "CANCELED" || status === "REJECTED") {
    console.log(`❌ Platba zrušena: ${extOrderId}, stav: ${status}`);
  }

  // PayU vyžaduje 200 OK, jinak bude opakovat notifikaci
  return res.status(200).json({ status: "OK" });
}
