import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db/prisma";
import getServerTable from "@/functions/admin/getServerTable";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { name, email } = req.body;

    try {
      const users = await prisma.user.create({
        data: {
          name,
          email,
        },
      });
      if (users) {
        const newUsers = await getServerTable("user");
        res.status(201).json(newUsers);
      }
    } catch (error: unknown) {
      console.log(error);
      res.status(400).json("User cannot be created");
    }
  }
}
