import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import userData from "./UserData";
import CurrentPatient from "./CurrentPatient";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  userData: userData,
  CurrentPatient: CurrentPatient,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
