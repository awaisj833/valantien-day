import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import authReducer from "./slices/authSlice";
import bookingReducer from "./slices/bookingSlice";
import globalReducer from "./slices/globalSlice";
import { injectStore } from "../utils/axios";
import { adminApi } from "../services/admin/adminApi";
import { api } from "../services/Api";
import { SplitApiSettings } from "../services/SplitApiSetting";

// Create persist config
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["user", "isAuthenticated"], // Only persist these keys from auth slice
};
const bookingPersistConfig = {
  key: "booking",
  storage,
};
const globalPersistConfig = {
  key: "global",
  storage,
};

// Wrap authReducer with persistReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedBookingReducer = persistReducer(bookingPersistConfig, bookingReducer);
const persistedGlobalReducer = persistReducer(globalPersistConfig, globalReducer);

// Create the root reducer
const rootReducer = {
  auth: persistedAuthReducer,
  booking: persistedBookingReducer,
  global: persistedGlobalReducer,
  [SplitApiSettings.reducerPath]: SplitApiSettings.reducer,
};

// Configure the store
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist
    }).concat(SplitApiSettings.middleware),
});


injectStore(store);

// Create the persistor
const persistor = persistStore(store);

export { store, persistor };
export default store;
