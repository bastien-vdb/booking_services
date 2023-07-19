import MainCalendar from '@/components/home/MainCalendar';
import { Periods, Booking, Service } from '@prisma/client';
import fetcher from '../lib/fetcher';
import Link from 'next/link';
import { useState } from 'react';
import SelectService from '@/components/home/SelectService';
import { useSession, signIn, signOut } from "next-auth/react";
import Logout from '@/components/auth/Logout';
import Login from '@/components/auth/Login';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/states/store';
import { setBookings } from '@/states/admin/slices/bookingsSlice';
import { setServices } from '@/states/admin/slices/servicesSlice';
import { setPeriods } from '@/states/home/slices/periodsSlice';
import { useAppSelector } from '@/states/store';

type HomeProps = {
  periods: Periods[];
  booking: Booking[];
  service: Service[];
};

export default function Home({ periods, booking, service }: HomeProps) {
  const dispatch: AppDispatch = useDispatch();
  dispatch(setBookings(booking));
  dispatch(setServices(service));
  dispatch(setPeriods(periods));

const {selectedService} = useAppSelector(state=>state.combineHomeReducers);

  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Chargement...</p>
  }

  if (status === "authenticated") {
    return (
      <div className='m-6'>
        <Logout session={session} signOut={signOut} />
        <Link className='p-2 m-2 rounded-bl-2xl bg-red-100 absolute top-0 right-0' href="/admin">Admin</Link>
        <main className='m-2 flex flex-col justify-center items-center'>
          {!selectedService ? <SelectService />
            :
            <MainCalendar />
          }
        </main>
      </div>
    )
  }

  return <Login signIn={signIn} />
}

export const getServerSideProps = async () => {
  const { periods, booking, service }: HomeProps = await fetcher(`${process.env.HOST}/api/home/getAll`, 'POST', ['periods', 'booking', 'service']);
  return { props: { periods, booking, service } };
};
