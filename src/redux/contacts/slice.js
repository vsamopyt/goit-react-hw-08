import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts } from './operations';
import { addContact } from './operations';
import { deleteContact } from './operations';
import { logout} from "../auth/operations"
// import { selectFilter } from '../filters/slice';
// import { selectContacts } from './selectors';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        // return { items: action.payload };
      })
      .addCase(addContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.loading = false;
      })
      .addCase(deleteContact.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logout.fulfilled, state => {
        // state = {
        //   items: [],
        //   loading: false,
        //   error: null,
        // }
        state.items = [];
        state.loading = false;
        state.error= null;
      })
      .addCase(logout.rejected, state => {
        state.items = [];
        state.loading = false;
        state.error= true;
      })
  },
});

// export const selectIsLoaded = state => state.contacts.loading;
// export const selectIsError = state => state.contacts.error;
// export const selectContacts = state => state.contacts.items;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contactList, selectNameFilter) => {
//     // console.log(contactList, selectNameFilter);
//     return contactList.filter(item =>
//       item.name.toLowerCase().includes(selectNameFilter.toLowerCase())
//     );
//   }
// );

export default slice.reducer;