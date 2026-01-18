import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import SessionProvider from "./context/SessionContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <SessionProvider>
            <App />
          </SessionProvider>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
