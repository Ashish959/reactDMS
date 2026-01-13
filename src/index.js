import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SessionProvider from "./context/SessionContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <ThemeProvider>
  //   <SessionProvider>
  //     <App />
  //   </SessionProvider>
  // </ThemeProvider>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);