import { createSlice } from "@reduxjs/toolkit";

const InitialState = {
  loggedIn: false,
  userData: null,
};
const auth = createSlice({
  name: "auth",
  InitialState,
  reducers: {
    login: (state, action) => {
      state.loggedIn = true;
      state.userData = action.payload.userData;
    },
    logout: (state) => {
      state.loggedIn = true;
    },
  },
});

export const { login, logout } = auth.actions;

export default auth.reducer;
