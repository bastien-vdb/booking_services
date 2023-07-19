import { Service } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

export const selectServiceSlice = createSlice({
  name: "selectedServiceSlice",
  initialState: null as Service | null,
  reducers: {
    setSelectService: (state, action) => action.payload,
  },
});

export const { setSelectService } = selectServiceSlice.actions;