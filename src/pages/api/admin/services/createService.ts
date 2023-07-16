import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db/prisma";
import getServerTable from "@/functions/admin/getServerTable";
import Stripe from "stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === "POST") {
    const { name, price: productPrice } = req.body;

    if (!process.env.STRIPE_SECRET_KEY) return res.status(400).json("Stripe secret key is not defined");
      try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });

        const service = await stripe.products.create({
          name,
        });

        const price = await stripe.prices.create({
          unit_amount: productPrice,
          currency: "eur",
          // recurring: { interval: "month" },
          product: service.id,
        });

        const services = await prisma.service.create({
          data: {
            name: service.name,
            price: price.unit_amount ?? 0,
            stripeId: service.id,
            stripePriceId: price.id,
          },
        });
        if (services) {
          const newServices = await getServerTable("service");
          res.status(201).json(newServices);
        }
      } catch (error: unknown) {
        console.log(error);
        res.status(400).json("Service cannot be created");
      }
  }
}
