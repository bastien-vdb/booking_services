import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db/prisma";
import getServerTable from '@/functions/admin/getServerTable';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "DELETE") {
    const { id } = req.body;
    try {
      await prisma.user.delete({
        where: {
          id,
        },
      });
      const newUsers = await getServerTable('user');
        res.status(200).json(newUsers);
    } catch (error) {
      res.status(404).json("No user found");
    }
  }
}
