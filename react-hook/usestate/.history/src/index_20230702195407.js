import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import useInput from "./useInput";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <useInput />
  </React.StrictMode>
);
