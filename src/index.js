import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SessionProvider from "./context/SessionContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <SessionProvider>
          <App />
        </SessionProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
