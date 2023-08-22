import { createSlice } from '@reduxjs/toolkit';
import {
  createNewUserThunk,
  loginUserThunk,
  logOutUserThunk,
  currentInfoUserThunk,
} from './UserAsyncThunk';

const defailtState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleReject = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',

  initialState: defailtState,
  extraReducers: builder => {
    builder
      .addCase(createNewUserThunk.pending, handlePending)
      .addCase(createNewUserThunk.rejected, handleReject)
      .addCase(createNewUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUserThunk.pending, handlePending)
      .addCase(loginUserThunk.rejected, handleReject)
      .addCase(loginUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logOutUserThunk.pending, handlePending)
      .addCase(logOutUserThunk.rejected, handleReject)
      .addCase(logOutUserThunk.fulfilled, () => {
        return defailtState;
      })
      .addCase(currentInfoUserThunk.pending, handlePending)
      .addCase(currentInfoUserThunk.rejected, handleReject)
      .addCase(currentInfoUserThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const authReducer = authSlice.reducer;
