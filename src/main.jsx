import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/app.scss";

import "@fortawesome/fontawesome-free/css/all.min.css";

import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
