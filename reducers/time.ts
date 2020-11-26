import { createSlice } from "@reduxjs/toolkit";

const timeSlice = createSlice({
  name: "time",
  initialState: {
    now: "",
  },
  reducers: {
    setTime(state, action) {
      state.now = action.payload;
    },
  },
});

export const timeSelector = (state) => state.time;
export const { setTime } = timeSlice.actions;
export default timeSlice.reducer;
