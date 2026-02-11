// configureStore creates Redux store easily
import { configureStore } from "@reduxjs/toolkit";

// Importing reducer from counter slice
import counterReducer from "./counterSlice";

// Creating store with all reducers
export const store = configureStore({
  reducer: {
    // counter will be available as state.counter
    counter: counterReducer,
  },
});

// Type for whole state tree
export type RootState = ReturnType<typeof store.getState>;

// Type for dispatch
export type AppDispatch = typeof store.dispatch;
