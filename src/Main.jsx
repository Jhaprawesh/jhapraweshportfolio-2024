import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ThemeProvider from "./context/ThemeContext";
import "./styles/index.css";
import "./styles/NewGlobal.css";

import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "cyan",
  background: "rgb(0 0 0 / 0.1)",
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
