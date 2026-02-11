// createSlice helps create state + actions + reducers in one place
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Type of counter state
interface CounterState {
  value: number;
}

// Initial value for state
const initialState: CounterState = {
  value: 0,
};

// Creating slice
const counterSlice = createSlice({
  name: "counter",
  initialState,

  // Reducers update state
  reducers: {
    // Increase counter by 1
    increment: (state) => {
      state.value += 1;
    },

    // Decrease counter by 1
    decrement: (state) => {
      state.value -= 1;
    },

    // Increase by any number
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// Export actions
export const { increment, decrement, incrementByAmount } =
  counterSlice.actions;

// Export reducer to store
export default counterSlice.reducer;
