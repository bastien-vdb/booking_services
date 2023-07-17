import { NextApiRequest, NextApiResponse } from "next";
import { Stripe } from "stripe";
import getRawBody from "raw-body";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // console.log('ReqBody', req);

    const raw = await getRawBody(req);

    console.log('ReqBody raw', raw);
  res.status(200).send("Webhook received");
}
