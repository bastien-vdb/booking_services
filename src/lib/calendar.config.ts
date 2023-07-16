import lastDayOfTheMonth from '@/lib/getLastDayOfTheMonth';

export const SlotListCalendarConfig = {
    begining: 9,
    end: 22,
    interval:60,
};

export const CalendarConfig = {
    minDate: new Date(),
    maxDate: lastDayOfTheMonth(new Date()),
}