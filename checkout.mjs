import { Router } from "express";
import Stripe from "stripe";

const router = Router();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

router.post("/checkout", async (req, res) => {
  try {
    const { items, email } = req.body;

    // Map items to Stripe line items
    const lineItems = items.map((item) => ({
      quantity: item.quantity,
      price_data: {
        currency: "usd",
        unit_amount: item.discountedPrice * 100, // Stripe expects the amount in cents
        product_data: {
          name: item.name,
          description: item.description,
          images: item.images,
        },
      },
    }));

    // Create a checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "http://localhost:5173/success?session_id={CHECKOUT_SESSION_ID}",
      cancel_url: "http://localhost:5173/cancel",
      customer_email: email,
      metadata: {
        email,
      },
    });

    res.json({
      message: "Checkout session created successfully",
      success: true,
      sessionId: session.id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
