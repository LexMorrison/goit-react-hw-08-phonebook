import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  token,
  createNewUser,
  loginUser,
  logOutUser,
  currentInfoUser,
} from 'Services/UserMethodsForApi';

export const createNewUserThunk = createAsyncThunk(
  'auth/create-new-user',
  async (body, { rejectWithValue }) => {
    try {
      const data = await createNewUser(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const loginUserThunk = createAsyncThunk(
  'auth/login-user',
  async (body, { rejectWithValue }) => {
    try {
      const data = await loginUser(body);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logOutUserThunk = createAsyncThunk(
  'auth/log-out-user',
  async (_, { rejectWithValue }) => {
    try {
      const data = await logOutUser();
      token.unSet();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const currentInfoUserThunk = createAsyncThunk(
  'auth/info-user',
  async (_, { rejectWithValue, getState }) => {
    try {
      const sessionToken = getState().auth.token;
      if (!sessionToken) {
        return rejectWithValue('Please Login');
      }
      token.set(sessionToken);
      const data = await currentInfoUser();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
