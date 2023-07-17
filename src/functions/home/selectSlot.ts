import fetcher from "@/lib/fetcher";
import { Booking } from "@prisma/client";
import { Service } from "@prisma/client";

const selectSlot = async (slot: Date, setBookings: React.Dispatch<React.SetStateAction<Booking[]>>, userId: string | undefined, serviceId: Service["id"] | null | undefined, stripePriceId: Service["stripePriceId"] | null | undefined) => {
  console.log("USA", slot, userId, serviceId, stripePriceId);
  try {
    const paymentPage = await fetcher(`${process.env.HOST}/api/checkout/create-checkout-session`, "POST", { stripePriceId, slot, userId, serviceId });
    // const newBookings = await fetcher(`${process.env.HOST}/api/home/createBookings`, "POST", { slot, userId, serviceId });
    // setBookings(newBookings);
    window.location.assign(paymentPage);
  } catch (error) {
    console.error("error: ", error);
    throw new Error("Une erreur est survenue lors de la prise de rendez-vous");
  }
};

export default selectSlot;
