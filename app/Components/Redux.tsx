"use client";
// 👆 Required in Next.js App Router because Redux hooks run on client

import React, { useEffect } from "react";

// Hooks to interact with Redux store
import { useDispatch, useSelector } from "react-redux";

// Import Redux actions
import { increment, decrement } from "../store/counterSlice";

// Import Redux types for TypeScript safety
import type { RootState, AppDispatch } from "../store/store";

function Redux() {
  // Read counter value from Redux store
  const count = useSelector((state: RootState) => state.counter.value);

  // Get dispatch function
  const dispatch = useDispatch<AppDispatch>();

  // 🔹 Listen for keyboard key press
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // If + key pressed, increment
      if (event.key === "+") {
        dispatch(increment());
      }

      // If - key pressed, decrement
      if (event.key === "-") {
        dispatch(decrement());
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup when component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [dispatch]);

  return (
    <div>
      <h2>Redux Counter</h2>

      {/* Increment button */}
      <button onClick={() => dispatch(increment())}>+</button>

      {/* Display counter value */}
      <span style={{ margin: "0 10px" }}>{count}</span>

      {/* Decrement button */}
      <button onClick={() => dispatch(decrement())}>-</button>

      <p>Press + to increment, - to decrement</p>
    </div>
  );
}

export default Redux;
