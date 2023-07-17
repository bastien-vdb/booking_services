import React, { useState } from 'react';
import Calendar from 'react-calendar';
import SlotListCalendar from './SlotListCalendar';
import getSlots from '@/functions/home/getSlots';
import { Booking, Periods, Service } from '@prisma/client';
import isDateBlocked from '@/functions/home/isDateBlocked';
import { CalendarConfig } from '@/lib/calendar.config';

type MainCalendarProps = {
    periods: Periods[];
    bookings: Booking[];
    setSelectService: React.Dispatch<React.SetStateAction<Service | null>>;
    selectedService: Service | null;
};

function MainCalendar({ periods, bookings, setSelectService, selectedService }: MainCalendarProps) {

    const [selectSlot, setSelectSlot] = useState<Date | null>(null);
    const times = getSlots(selectSlot, bookings);

    return (
        <div>
            <div>Prestation sélectionné: <b className='text-2xl text-red-500 ml-4'>{selectedService?.name} à {selectedService?.price} €</b></div>
            {selectSlot ?
                <div>
                    <SlotListCalendar times={times} selectedService={selectedService} />
                    <div className='cursor-pointer m-2' onClick={() => setSelectSlot(null)}>Back</div>
                </div>
                :
                <Calendar tileDisabled={(date) => isDateBlocked(date.date, periods)} minDate={CalendarConfig.minDate} maxDate={CalendarConfig.maxDate} onClickDay={(date) => setSelectSlot(date)} locale='fr-FR' />
            }
            <div className='cursor-pointer m-2' onClick={() => setSelectService(null)}>Reset</div>
        </div>
    );
}

export default MainCalendar;