import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: {name: null,email: null},
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state, action) {
      state.isLoading = true;
    },

    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    [authOperations.logIn.pending](state, action) {
      state.isLoading = true;
    },

    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    [authOperations.logOut.pending](state, action) {
      state.isLoading = true;
    },

    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },

    [authOperations.refreshCurrentUser.pending](state, action) {
      state.isLoading = true;
      state.isFetchingCurrentUser = true;
    },

    [authOperations.refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.isFetchingCurrentUser = false;
    },

    [authOperations.refreshCurrentUser.rejected](state, action) {
      state.error = action.payload;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
