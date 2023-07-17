import fetcher from "@/lib/fetcher";
import { Service } from "@prisma/client";

const selectSlot = async (slot: Date, userId: string | undefined, serviceId: Service["id"] | null | undefined, stripePriceId: Service["stripePriceId"] | null | undefined) => {
  try {
    const paymentPage = await fetcher(`${process.env.HOST}/api/checkout/create-checkout-session`, "POST", { stripePriceId, slot, userId, serviceId });
    window.location.assign(paymentPage);
  } catch (error) {
    console.error("error: ", error);
    throw new Error("Une erreur est survenue lors de la prise de rendez-vous");
  }
};

export default selectSlot;
