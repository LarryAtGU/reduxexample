import { createSlice } from "@reduxjs/toolkit";

const authInitState = {
  isAuth: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState: authInitState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },

    logout(state) {
      state.isAuth = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
