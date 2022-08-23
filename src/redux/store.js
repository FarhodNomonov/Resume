import { configureStore } from "@reduxjs/toolkit";
import User from "./reducer/userSlice";

export const store = configureStore({
  reducer: {
    User,
  },
});

export default { store };
