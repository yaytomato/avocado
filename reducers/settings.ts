import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    bgColorId: 0,
  },
  reducers: {
    setBgColorId(state, action) {
      state.bgColorId = action.payload;
    },
  },
});

export const settingsSelector = (state) => state.settings;
export const { setBgColorId } = settingsSlice.actions;
export default settingsSlice.reducer;
