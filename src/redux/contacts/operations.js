import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.goit.global';

const setAuthHeader = token => {
   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

const getToken = (thunkAPI) => {
   const state = thunkAPI.getState();
   const token = state.auth.token;
   return token;
}

export const fetchContacts = createAsyncThunk(
   'contacts/fetchContacts',
   async(_, thunkAPI) => {
      try {
         setAuthHeader(getToken(thunkAPI));
         const res = await axios.get('/contacts');
         return res.data;
      } catch (e) {
         return thunkAPI.rejectWithValue(e.message);
      }
   }
);

export const addContact = createAsyncThunk(
   'contacts/addContact',
   async({ name, number }, thunkAPI) => {
      try {
         setAuthHeader(getToken(thunkAPI));
         const res = await axios.post('/contacts', { name, number});
         return res.data;
      } catch (e) {
         return thunkAPI.rejectWithValue(e.message);
      }
   }
)

export const deleteContact = createAsyncThunk(
   'contacts/deleteContact',
   async(id, thunkAPI) => {
      try {
         setAuthHeader(getToken(thunkAPI));
         const res = await axios.delete(`/contacts/${id}`);
         return res.data;
      } catch (e) {
         return thunkAPI.rejectWithValue(e.message);
      }
   }
)