import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/NewGlobal.css";
import ThemeProvider from "./context/ThemeContext";
import "./styles/index.css";
import "@mantine/core/styles.css";

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
