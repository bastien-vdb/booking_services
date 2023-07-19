import fetcher from "@/lib/fetcher";

const handleDeleteBooking = async (id: string) => {
  try {
    return await fetcher(`${process.env.HOST}/api/admin/bookings/deleteBooking`, "DELETE", { id });
  } catch (error: unknown) {
    alert("user cannot be deleted");
  }
};

export default handleDeleteBooking;
