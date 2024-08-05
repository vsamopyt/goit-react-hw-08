import { configureStore } from '@reduxjs/toolkit';

// import contactsReducer from './contactsSlice';
// import filterReducer from './filtersSlice';

// import { configureStore } from '@reduxjs/toolkit';

// import contactsReducer from './contacts/slice';
import filterReducer from './filters/slice';
import contactsReducer from './contacts/slice';
import authReducer from './auth/slice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: "auth-token",
  storage: storage,
  whitelist: ["token"]
};
const persistedAuthsReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistedAuthsReducer,
     // auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


