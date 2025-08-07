import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./store/store";
import { ClerkProvider } from "@clerk/clerk-react";
import { DataProvider } from "./context/DataContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </DataProvider>
  </StrictMode>
);
