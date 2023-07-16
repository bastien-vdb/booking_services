import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db/prisma";
import getServerTable from "@/functions/admin/getServerTable";
import Stripe from "stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    const { service } = req.body;
    const { id, stripeId } = service;

    if (!process.env.STRIPE_SECRET_KEY) return res.status(400).json("Stripe secret key is not defined");

    console.log('on veut supprimer le service', service);

    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });
      await stripe.products.update(stripeId, { active: false });

      await prisma.service.delete({
        where: {
          id,
        },
      });
      const newServices = await getServerTable("service");
      res.status(200).json(newServices);
    } catch (error) {
      console.log(error);
      res.status(404).json("No service found");
    }
  }
}
