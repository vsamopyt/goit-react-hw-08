import { configureStore } from '@reduxjs/toolkit';

// import contactsReducer from './contactsSlice';
// import filterReducer from './filtersSlice';

// import { configureStore } from '@reduxjs/toolkit';

// import contactsReducer from './contacts/slice';
import filterReducer from './filters/slice';
import contactsReducer from './contacts/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
