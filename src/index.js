import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {Provider} from "react-redux";
import configureStore from "./configureStore";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

const store = configureStore();
console.log("store:",store.getState())

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
