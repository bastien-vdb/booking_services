import { Booking } from "@prisma/client";

const getBookingsOfSelectedDay = (selectSlot: Date, bookings: Booking[]): Booking[] => {
  return bookings.filter((booking) => {
    const getMonth = new Date(booking.date).getMonth();
    const getFullYear = new Date(booking.date).getFullYear();
    const getDay = new Date(booking.date).getDate();

    if (getMonth === selectSlot.getMonth() && getFullYear === selectSlot.getFullYear() && getDay === selectSlot.getDate()) {
      return booking;
    }
  });
};

export default getBookingsOfSelectedDay;
