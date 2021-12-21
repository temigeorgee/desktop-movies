import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./stylesheet/index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { AuthContextProvider } from "./redux/auth/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor}>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>

    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
