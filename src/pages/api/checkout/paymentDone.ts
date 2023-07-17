import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";
import getRawBody from "raw-body";
import createBookings from "@/functions/home/createBookings";
import { tr } from "date-fns/locale";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("Stripe secret key is not defined");

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });

  const event = req.body;
  const rawBody = await getRawBody(req);

  if (!process.env.STRIPE_WEBHOOK_SECRET) throw new Error("Stripe webhook secret key is not defined");

  console.log("step 1 !");

  const signature = req.headers["stripe-signature"];

  console.log("signature", signature);

  if (signature === undefined) throw new Error("Stripe signature is not defined");
  const webhookEvent = stripe.webhooks.constructEvent(rawBody, signature, process.env.STRIPE_WEBHOOK_SECRET);

  try {
    // Handle the specific event type
    switch (webhookEvent.type) {
      case "checkout.session.completed":
        const session = webhookEvent.data.object as any;
        // Payment was successful, you can retrieve relevant details from the session object

        console.log("webhookEvent", webhookEvent);
        const { slot, serviceId, stripePriceId, userId } = session.metadata;

        await createBookings(slot, serviceId, stripePriceId, userId);

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
