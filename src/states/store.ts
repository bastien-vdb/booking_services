import { configureStore } from "@reduxjs/toolkit";
import combineStore from '@/states/admin/combineAdminReducers';

const store = configureStore({
    reducer: combineStore
});

export default store;

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;