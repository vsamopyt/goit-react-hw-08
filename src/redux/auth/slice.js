import { register } from './operations';
import {login} from "./operations";
import {logout} from "./operations";
import {refreshUser } from "./operations";

import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefresching: false,
    isloading: false,
    isError: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isloading = true;
        state.isError = false;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isloading = false;
      })
      .addCase(register.rejected, state => {
        state.isError = true;
        state.isloading = false;
      })
      .addCase(login.pending, state => {
        state.isloading = true;
        state.isError = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isloading = false;
      })
      .addCase(login.rejected, state => {
        state.isError = true;
        state.isloading = false;
      })
      .addCase(logout.pending, state => {
        state.isloading = true;
        state.isError = false;
      })
      .addCase(logout.fulfilled, state => {
        state.user ={
            name: null,
            email: null,
        }
        // state.user.name = null;
        // state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isloading = false;
      })
      .addCase(logout.rejected, state => {
        state.user ={
            name: null,
            email: null,
        }
        // state.user.name = null;
        // state.user.email = null;
        state.token = null;
        state.isLoggedIn = false;
        state.isloading = false;
        state.isError = true;
        state.isloading = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isloading = true;
        state.isError = false;
        state.isRefresching =true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        // state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isloading = false;
        state.isRefresching = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isError = true;
        state.isloading = false;
        state.isRefresching = false;
      })
  },

  //   name: "filter",
  //   initialState: { name: "" },
  //   reducers: {
  //     changeFilter(state, action) {
  //       state.name = action.payload;
  //     },
  //   },
});

export default slice.reducer;
