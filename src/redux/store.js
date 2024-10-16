import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { searchReducer } from "./contacts/searchSlice";
import { authReducer } from "./auth/authSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistConfig = {
   key: 'auth',
   storage,
   whitelist: ['token']
}

export const store = configureStore({
   reducer: {
      auth: persistReducer(persistConfig, authReducer),
      contacts: contactsReducer,
      search: searchReducer
   },
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
});

export const persistor = persistStore(store);