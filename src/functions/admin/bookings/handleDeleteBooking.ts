import fetcher from "@/lib/fetcher";
import { Booking } from "@prisma/client";

const handleDeleteBooking = async (id: string, setBookings: React.Dispatch<React.SetStateAction<Booking[]>>) => {
  try {
    const response = await fetcher(`${process.env.HOST}/api/admin/bookings/deleteBooking`, "DELETE", { id });
    setBookings(response);
  } catch (error: unknown) {
    alert("user cannot be deleted");
  }
};

export default handleDeleteBooking;
