import { combineReducers } from "@reduxjs/toolkit";
import { periodsSlice } from "@/states/home/slices/periodsSlice";
import { selectServiceSlice } from "./slices/selectServiceSlice";
import { selectedSlotSlice } from "./slices/selectedSlotSlice";

const combineHomeStore = combineReducers({
  periods: periodsSlice.reducer,
  selectedService: selectServiceSlice.reducer,
  selectedSlot: selectedSlotSlice.reducer,
});

export default combineHomeStore;
