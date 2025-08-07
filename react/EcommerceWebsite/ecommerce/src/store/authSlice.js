import { createSlice } from "@reduxjs/toolkit";

function getUserFromStorage() {
  try {
    const item = localStorage.getItem("user");
    return item ? JSON.parse(item) : null;
  } catch (e) {
    console.error("Failed to parse", e);
    return null;
  }
}
const userFromStorage = getUserFromStorage();

const initialState = {
  user: userFromStorage || null,
  isAuthenticated: !!userFromStorage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
