import { Service } from "@prisma/client";
import { prisma } from "@/db/prisma";

async function createBookings(slot: Date, serviceId: Service["id"] | null | undefined, stripePriceId: Service["stripePriceId"] | null | undefined, userId: string | undefined): Promise<boolean> {
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
            id: serviceId || undefined,
          },
        },
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Une erreur est survenue lors de la prise de rendez-vous");
  }
}

export default createBookings;
