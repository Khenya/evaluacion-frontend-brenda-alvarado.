import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import "antd/dist/reset.css"; // Ant Design (opcional)
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
