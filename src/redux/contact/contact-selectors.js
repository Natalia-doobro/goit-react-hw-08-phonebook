import { createSelector } from '@reduxjs/toolkit';

export const masContactForm = state => state.contacts.items;
export const valueFilter = state => state.contacts.filter;

export const getVisibleContacts = createSelector(
  [masContactForm, valueFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(
      ({ name, number }) =>
        name.toLowerCase().includes(normalizedFilter) ||
        number.toLowerCase().includes(normalizedFilter),
    );
  },
);