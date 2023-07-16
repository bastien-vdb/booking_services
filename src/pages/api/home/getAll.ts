import { NextApiRequest, NextApiResponse } from "next";
import getServerTable from "@/functions/admin/getServerTable";
import { Booking, User, Service, Periods } from "@prisma/client";

type allResultType = User[] | Booking[] | Service[] | Periods[] | null[];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const prismaKey = req.body;

  const allResult:Record<string, allResultType> = {};

  for (const element of prismaKey) {
    try {
      const result = await getServerTable(element);
      allResult[element] = [...result];
    } catch (error) {
      console.log(error);
      res.status(501).json(`Not possible to find any ${element} from the db`);
    }
  }
  res.status(200).json(allResult);
}
