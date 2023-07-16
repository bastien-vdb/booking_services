import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json("La route fonctionne");
}
