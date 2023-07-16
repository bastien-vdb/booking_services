import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

// Initialize Stripe with your secret key
if (!process.env.STRIPE_SECRET_KEY) throw new Error("Stripe secret key is not defined");

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

export default async function webhookHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const event = req.body;

  try {
    // Verify the webhook event using your webhook signing secret
    const signature = req.headers["stripe-signature"];
    const webhookEvent = stripe.webhooks.constructEvent(
      req.body,
      signature || "",
      process.env.STRIPE_WEBHOOK_SECRET || ""
    );

    // Handle the specific event type
    switch (webhookEvent.type) {
      case "checkout.session.completed":
        const session = webhookEvent.data.object;
        // Payment was successful, you can retrieve relevant details from the session object
        console.log("Payment completed:", session);
        // Perform any necessary actions (e.g., update booking status, send confirmation email, etc.)
        break;
      default:
        // Handle other webhook event types if needed
        console.log("Unhandled event type:", webhookEvent.type);
    }

    res.status(200).send("Webhook received");
  } catch (error) {
    console.error("Error handling webhook:", error);
    res.status(400).send("Webhook error");
  }
}