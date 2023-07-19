import { Booking } from '@prisma/client';
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/states/store';
import handleDeleteBooking from '@/functions/admin/bookings/handleDeleteBooking';
import { setBookings } from '@/states/admin/slices/bookingsSlice';

const ManageBooking = () => {

    const dispatch: AppDispatch = useDispatch();
    const bookings = useAppSelector(state=>state.combineAdminReducers.bookings);

    return (<div className='User border p-2'>
        <h1>Bookings</h1>
        <ul>
            {bookings && bookings.map((booking:Booking) => {
                return (
                    <li key={booking.id}><button className='border bg-gray-200 rounded-xl px-2' onClick={async()=>dispatch(setBookings(await handleDeleteBooking(booking.id)))}
                    >X</button> {String(booking.startTime)} </li>
                )
            })
            }
        </ul>

    </div>
    );
};

export default ManageBooking;