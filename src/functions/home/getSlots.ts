import { add } from "date-fns";
import { SlotListCalendarConfig } from "@/lib/calendar.config";
import { Booking } from "@prisma/client";
import getBookingsOfSelectedDay from "./getBookingsOfSelectedDay";
import createInterval from "@/lib/createInterval";

const getSlots = (selectSlot: Date | null, bookings: Booking[]) => {
  if (!selectSlot) return [];

  const bookingsOfSelectedDay = getBookingsOfSelectedDay(selectSlot, bookings);

  const begining = add(selectSlot, { hours: SlotListCalendarConfig.begining });
  const end = add(selectSlot, { hours: SlotListCalendarConfig.end });
  const interval = SlotListCalendarConfig.interval;

  const times = createInterval(begining, end, interval).filter((time) => {
    const isBooked = bookingsOfSelectedDay.some((booking) => {
      return time >= new Date(booking.startTime) && time < new Date(booking.endTime);
    });
    return !isBooked;
  });

  return times;
};

export default getSlots;
