import React from 'react';
import { format } from 'date-fns';
import  selectSlot from '@/functions/home/selectSlot';
import { Booking, Service } from '@prisma/client';
import { useSession } from 'next-auth/react';

type SlotListCalendarProps = {
    times: Date[];
    setBookings: React.Dispatch<React.SetStateAction<Booking[]>>;
    selectedService: Service | null;
};

function SlotListCalendar({ times, setBookings, selectedService }: SlotListCalendarProps) {
    const {data:session} = useSession();
    const userId = session?.user?.id;
    const serviceId = selectedService?.id;
    const stripePriceId = selectedService?.stripePriceId;

    return (
        <div>
            <div className='flex max-w-lg flex-wrap gap-4'>
                {times?.map((slot: any, i: number) => (
                    <div className='rounded-sm bg-gray-100 p-2' key={`time-${i}`}>
                        <button onClick={() => selectSlot(slot, setBookings, userId, serviceId, stripePriceId)} type='button'>
                            {format(slot, 'kk:mm')}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SlotListCalendar;