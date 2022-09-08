import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
  },
};
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return payload;
    },
  },
});
export const { setUser } = userSlice.actions;
export default userSlice.reducer;
