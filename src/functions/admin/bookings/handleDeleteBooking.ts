import fetcher from "@/lib/fetcher";
import {setBookings} from '@/states/admin/slices/bookingsSlice';

const handleDeleteBooking = async (id: string, dispatch: any) => {
  try {
    const response = await fetcher(`${process.env.HOST}/api/admin/bookings/deleteBooking`, "DELETE", { id });
    dispatch(setBookings(response));
  } catch (error: unknown) {
    alert("user cannot be deleted");
  }
};

export default handleDeleteBooking;
