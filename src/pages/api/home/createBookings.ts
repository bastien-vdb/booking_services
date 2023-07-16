import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/db/prisma";
import getServerTable from "@/functions/admin/getServerTable";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { slot, userId, serviceId } = req.body;

    const selectedTime = new Date(slot);
    const startTime = new Date(selectedTime);
    const endTime = new Date(selectedTime.getTime() + 1 * 60 * 60 * 1000);

    try {
      const newBooking = await prisma.booking.create({
        data: {
          date: startTime,
          startTime,
          endTime,
          isAvailable: false,
          service: {
            connect: {
              id: serviceId,
            },
          },
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
      if (newBooking) {
        const newBookings = await getServerTable("booking");
        res.status(201).json(newBookings);
      }
    } catch (error) {
      console.log(error);
      res.status(400).json("Booking cannot be created");
    }
  } else {
    res.status(405).json({ message: "We only support POST" });
  }
}
