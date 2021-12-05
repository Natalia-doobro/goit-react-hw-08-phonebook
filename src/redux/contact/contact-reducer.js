import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./contact-actions";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from './contact-aperations';

const items = createReducer([], {
  [fetchContacts.fulfilled]:  (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter((cont) => cont.id !== payload),
});

const loading = createReducer(false, {
  [fetchContacts.pending]: () => true,
  [fetchContacts.fulfilled]: () => false,
  [fetchContacts.rejected]: () => false,

  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,

  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});


const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

// const error = createReducer(null, {
//   [getContactError]: (_, { payload }) => payload,
// });

export default combineReducers({
  items,
  filter,
  loading,
  // error,
});

