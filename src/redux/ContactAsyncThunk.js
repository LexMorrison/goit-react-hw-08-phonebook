import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from 'Services/ContactsMethodsForApi';
import { token } from 'Services/UserMethodsForApi';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContacts',
  //I need token here coz without it i cant work with my frind list
  async (_, { rejectWithValue, getState }) => {
    try {
      //auth the same like in userSlice(name)
      const currentToken = getState().auth.token;
      token.set(currentToken);
      const data = await fetchContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  //we dont need token here coz we already get it when we got our friend list
  async (contact, { rejectWithValue }) => {
    try {
      const data = await addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await deleteContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
