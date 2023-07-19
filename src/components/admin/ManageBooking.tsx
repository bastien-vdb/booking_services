import { Booking } from '@prisma/client';
import { useDispatch, useSelector } from 'react-redux';

type ManageBookingProps = {
    handleDeleteBooking: (id: string, setBookings:React.Dispatch<React.SetStateAction<Booking[]>>) => void;
}
const ManageBooking = ({ handleDeleteBooking }: ManageBookingProps) => {

    const dispatch: any = useDispatch();
    const bookings = useSelector((state:any)=>state.bookings);

    return (<div className='User border p-2'>
        <h1>Bookings</h1>
        <ul>
            {bookings && bookings.map((booking:Booking) => {
                return (
                    <li key={booking.id}><button className='border bg-gray-200 rounded-xl px-2' onClick={()=>handleDeleteBooking(booking.id, dispatch)}
                    >X</button> {String(booking.startTime)} </li>
                )
            })
            }
        </ul>

    </div>
    );
};

export default ManageBooking;