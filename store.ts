import { configureStore } from "@reduxjs/toolkit";

import timeReducer from "./reducers/time";
import settingsReducer from "./reducers/settings";

export default configureStore({
  reducer: {
    time: timeReducer,
    settings: settingsReducer,
  },
  devTools: true,
});
