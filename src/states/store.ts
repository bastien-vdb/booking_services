import { configureStore } from "@reduxjs/toolkit";
import combineAdminReducers from '@/states/admin/combineAdminReducers';
import combineHomeReducers from '@/states/home/combineHomeReducers';
import {TypedUseSelectorHook, useSelector} from 'react-redux';

const store = configureStore({
    reducer: {combineAdminReducers, combineHomeReducers}
});

export default store;

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector:TypedUseSelectorHook<rootState> = useSelector;