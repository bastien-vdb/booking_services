import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("Stripe secret key is not defined");

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });

  const event = req.body;

  if (!process.env.STRIPE_WEBHOOK_SECRET) throw new Error("Stripe webhook secret key is not defined");

  console.log("step 1 !");

  const signature = req.headers["stripe-signature"];
  console.log("signature", signature);
  // if (signature === undefined) throw new Error("Stripe signature is not defined");
  // const webhookEvent = stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_SECRET);

  // console.log("step 2", webhookEvent);

  res.status(200).send("Webhook received");
}
