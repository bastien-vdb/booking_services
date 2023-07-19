import { combineReducers } from "@reduxjs/toolkit";
import {servicesSlice} from '@/states/admin/slices/servicesSlice';
import {bookingsSlice} from '@/states/admin/slices/bookingsSlice';
import { usersSlice } from "./slices/usersSlice";

const combineAdminStore = combineReducers({
    services: servicesSlice.reducer,
    bookings: bookingsSlice.reducer,
    users: usersSlice.reducer,
});

export default combineAdminStore;