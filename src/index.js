import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "react-slick";
import "react-calendar/dist/Calendar.css";
import reportWebVitals from "./reportWebVitals";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "slick";

import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import CategoryPage from "./Pages/CateogryPage/index";
import ProductPage from "./Pages/ProductPage";
import PincodePage from "./Pages/PincodePage";
import AccountPage from "./Pages/AccountPage/AccountPage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/pincode">
            <PincodePage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
          <Route path="/category">
            <CategoryPage />
          </Route>
          <Route path="/account">
            <AccountPage />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// npm i react-router-dom slick-carousel redux-thunk redux-persist redux-logger redux-devtools-extension redux react-slick react-redux react-icons react-helmet @headlessui/react @heroicons/react @tailwindcss/aspect-ratio @tailwindcss/forms
