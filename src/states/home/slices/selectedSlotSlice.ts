import { createSlice } from "@reduxjs/toolkit";

export const selectedSlotSlice = createSlice({
  name: "selectedSlot",
  initialState: null as Date | null,
  reducers: {
    setSelectedSlot: (state, action) => action.payload,
  },
});

export const { setSelectedSlot } = selectedSlotSlice.actions;