import { createSlice } from "@reduxjs/toolkit";
import { addAccount, login, logout, pageRefresh } from "./operations";

const authSlice = createSlice({
   name: 'auth',
   initialState: {
      user: { user: null, email: null },
      token: null,
      isLoggedIn: false,
      isRefreshing: false,
   },
   extraReducers: builder => {
      builder
         .addCase(addAccount.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
         })
         .addCase(login.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
         })
         .addCase(logout.fulfilled, state => {
            state.user = { user: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
         })
         .addCase(pageRefresh.pending, state => {
            state.isRefreshing = true;
         })
         .addCase(pageRefresh.fulfilled, (state, action) => {
            state.user = { user: action.payload.name, email: action.payload.email };
            state.isLoggedIn = true;
            state.isRefreshing = false;
         })
         .addCase(pageRefresh.rejected, state => {
            state.isRefreshing = false;
         })
   }
});

export const authReducer = authSlice.reducer;



