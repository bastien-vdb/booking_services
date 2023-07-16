import ManageService from '@/components/admin/ManageService';
import ManageUser from '@/components/admin/ManageUser';
import ManageBooking from '@/components/admin/ManageBooking';
import handleCreateService from '@/functions/admin/services/handleCreateService';
import handleDeleteService from '@/functions/admin/services/handleDeleteService';
import handleCreateUser from '@/functions/admin/users/handleCreateUser';
import handleDeleteUser from '@/functions/admin/users/handleDeleteUser';
import handleDeleteBooking from '@/functions/admin/bookings/handleDeleteBooking';
import fetcher from '@/lib/fetcher';
import { Service, User, Booking } from '@prisma/client';
import { useState } from 'react';
import Link from 'next/link';

type AdminProps = {
  service: Service[];
  user: User[];
  booking: Booking[];
}

export default function Admin({ service, user, booking }: AdminProps) {
  const [services, setServices] = useState<Service[]>(service);
  const [users, setUsers] = useState<User[]>(user);
  const [bookings, setBookings] = useState<Booking[]>(booking);

  return (
    <>
      <Link className='p-2 m-2 rounded-bl-2xl' href="/">Home</Link>
      <main>
        <ManageService handleDeleteService={handleDeleteService} handleCreateService={handleCreateService} services={services} setServices={setServices} />
        <ManageUser handleDeleteUser={handleDeleteUser} handleCreateUser={handleCreateUser} users={users} setUsers={setUsers} />
        <ManageBooking handleDeleteBooking={handleDeleteBooking} bookings={bookings} setBookings={setBookings} />
      </main>
    </>
  )
}

export const getServerSideProps = async () => {
  const {user, service, booking} = await fetcher(`${process.env.HOST}/api/home/getAll`, 'POST', ['service', 'user', 'booking']);
  return { props: { user, service, booking } };
};