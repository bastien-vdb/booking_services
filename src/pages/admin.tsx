import ManageService from '@/components/admin/ManageService';
import ManageUser from '@/components/admin/ManageUser';
import ManageBooking from '@/components/admin/ManageBooking';
import fetcher from '@/lib/fetcher';
import { Service, User, Booking } from '@prisma/client';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setServices } from '@/states/admin/slices/servicesSlice';
import { setBookings } from '@/states/admin/slices/bookingsSlice';
import { setUsers } from '@/states/admin/slices/usersSlice';

type AdminProps = {
  service: Service[];
  user: User[];
  booking: Booking[];
}

export default function Admin({ service, user, booking }: AdminProps) {

  const dispatch = useDispatch();

  dispatch(setServices(service));
  dispatch(setBookings(booking));
  dispatch(setUsers(user));

  return (
    <>
      <Link className='p-2 m-2 rounded-bl-2xl' href="/">Home</Link>
      <main>
        <ManageService />
        <ManageUser />
        <ManageBooking />
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const { user, service, booking } = await fetcher(`${process.env.HOST}/api/home/getAll`, 'POST', ['service', 'user', 'booking']);
  return { props: { user, service, booking } };
};