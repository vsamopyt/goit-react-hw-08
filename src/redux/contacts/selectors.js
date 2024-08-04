import {createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectIsLoaded = state => state.contacts.loading;
export const selectIsError = state => state.contacts.error;
export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contactList, selectNameFilter) => {
    //   console.log(contactList, selectNameFilter);
      return contactList.filter(item =>
        item.name.toLowerCase().includes(selectNameFilter.toLowerCase())
      );
    }
  );