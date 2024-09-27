"use client";
import React from "react";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import store from "../../appStore/store";

const App = dynamic(() => import("../../App"), { ssr: false });

export function ClientOnly() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}
