import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db/prisma";
import getServerTable from '@/functions/admin/getServerTable';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      await prisma.booking.delete({
        where: {
          id,
        },
      });
      const newBookings = await getServerTable('booking');
        res.status(200).json(newBookings);
    } catch (error) {
      res.status(404).json("No booking found");
    }
  }
}
