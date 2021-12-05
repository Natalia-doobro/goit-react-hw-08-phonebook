import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';


export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async _ => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      
    }
  },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
     
    }
  },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      await axios.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
     
    }
  },
);