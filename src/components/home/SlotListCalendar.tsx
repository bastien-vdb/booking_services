import React from 'react';
import getSlots from '@/functions/home/getSlots';
import { format } from 'date-fns';
import selectSlot from '@/functions/home/selectSlot';
import { Service } from '@prisma/client';
import { useSession } from 'next-auth/react';
import { useAppSelector } from '@/states/store';

type SlotListCalendarProps = {
    selectedService: Service | null;
};

function SlotListCalendar() {
    const { data: session } = useSession();

    const { selectedService, selectedSlot } = useAppSelector(state => state.combineHomeReducers);
    const { bookings } = useAppSelector(state => state.combineAdminReducers);

    const userId = session?.user?.id;
    const serviceId = selectedService?.id;
    const stripePriceId = selectedService?.stripePriceId;



    const times = getSlots(selectedSlot, bookings);

    return (
        <div>
            <div className='flex max-w-lg flex-wrap gap-4'>
                {times?.map((slot: Date, i: number) => (
                    <div className='rounded-sm bg-gray-100 p-2' key={`time-${i}`}>
                        <button onClick={() => selectSlot(slot, userId, serviceId, stripePriceId)} type='button'>
                            {format(slot, 'kk:mm')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SlotListCalendar;