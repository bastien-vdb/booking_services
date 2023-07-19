import { createSlice } from "@reduxjs/toolkit";
import { Periods } from "@prisma/client";

export const periodsSlice = createSlice({
  name: "periods",
  initialState: [] as Periods[],
  reducers: {
    setPeriods: (state, action) => action.payload,
  },
});

export const {setPeriods} = periodsSlice.actions;
