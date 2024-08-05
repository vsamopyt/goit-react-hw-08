import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectIsLoaded = state => state.contacts.loading;
export const selectIsError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contactList, selectNameFilter) => {
    return contactList.filter(item => {
      if (item.name.toLowerCase().includes(selectNameFilter.toLowerCase())) {
        return item.name.toLowerCase().includes(selectNameFilter.toLowerCase());
      } else {
        return item.number
          .toLowerCase()
          .includes(selectNameFilter.toLowerCase());
      }
    });
  }
);
