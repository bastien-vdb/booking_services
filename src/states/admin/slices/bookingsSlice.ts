import { Booking } from '@prisma/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const bookingsSlice = createSlice({
    name:"bookings",
    initialState: [] as Booking[],
    reducers: {
        setBookings:(state, action:PayloadAction<Booking[]>)=>{return action.payload},
    }
});

export const {setBookings} = bookingsSlice.actions;