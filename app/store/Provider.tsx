"use client";

// Provider connects Redux store to React
import { Provider } from "react-redux";

// Importing store
import { store } from "./store";

// ReduxProvider wraps app with store access
export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Provider gives store to all children components
  return <Provider store={store}>{children}</Provider>;
}
