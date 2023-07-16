import { Booking } from '@prisma/client';

type ManageBookingProps = {
    handleDeleteBooking: (id: string, setBookings:React.Dispatch<React.SetStateAction<Booking[]>>) => void;
    bookings?: Booking[],
    setBookings: React.Dispatch<React.SetStateAction<Booking[]>>;
}
const ManageBooking = ({ handleDeleteBooking, bookings, setBookings }: ManageBookingProps) => {

    return (<div className='User border p-2'>
        <h1>Bookings</h1>
        <ul>
            {bookings && bookings.map((booking:Booking) => {
                return (
                    <li key={booking.id}><button className='border bg-gray-200 rounded-xl px-2' onClick={()=>handleDeleteBooking(booking.id, setBookings)}
                    >X</button> {String(booking.startTime)} </li>
                )
            })
            }
        </ul>

    </div>
    );
};

export default ManageBooking;