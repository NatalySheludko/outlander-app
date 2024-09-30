import { configureStore } from "@reduxjs/toolkit";
import { catalogReducer } from "./catalog/slice";
import { categoryReducer } from "./category/slice";
import storage from "redux-persist/lib/storage";
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

const persistedCatalogReducer = persistReducer(
  {
    key: "catalogValue",
    storage,
    whitelist: ["items"],
  },
  catalogReducer
);

export const store = configureStore({
  reducer: {
    catalog: persistedCatalogReducer,
    category: categoryReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

