import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import UseTaps from "./UseTaps";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <UseTaps />
  </React.StrictMode>
);
