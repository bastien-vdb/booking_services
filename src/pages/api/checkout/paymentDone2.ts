import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!process.env.STRIPE_SECRET_KEY) throw new Error("Stripe secret key is not defined");

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: "2022-11-15",
  });

  const event = req.body;

  if (!process.env.STRIPE_WEBHOOK_SECRET) throw new Error("Stripe webhook secret key is not defined");

  console.log('la key!!!!')

  res.status(200).json("La route fonctionne !");
}
