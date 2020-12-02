import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "time",
  initialState: {
    now: "",
    date: "",
  },
  reducers: {
    setTime(state, action) {
      state.now = action.payload;
    },
    setDate(state, action) {
      state.date = action.payload;
    },
  },
});

export const timeSelector = (state) => state.time.now;
export const dateSelector = (state) => state.time.date;
export const { setTime, setDate } = timeSlice.actions;
export default timeSlice.reducer;
