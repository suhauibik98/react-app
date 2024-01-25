import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LockProvider } from "./context/lockState";


const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
    <LockProvider>
      <App></App>
    </LockProvider>
  </React.StrictMode>
);
