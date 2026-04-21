export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
  const { amount, churchName } = req.body;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'czk',
        product_data: {
          name: 'Dar pro ' + churchName,
        },
        unit_amount: amount * 100,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://farnidar.cz/?platba=uspech',
    cancel_url: 'https://farnidar.cz/?platba=zruseno',
  });

  res.status(200).json({ url: session.url });
}
