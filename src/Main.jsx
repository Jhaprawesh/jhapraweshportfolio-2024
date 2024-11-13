import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";
import "./styles/index.css";
import "./styles/NewGlobal.css";

import { MantineProvider } from "@mantine/core";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
