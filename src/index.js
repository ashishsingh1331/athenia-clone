import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/store/index";

const Layout = React.lazy(() => import("./pages/Layout"));
const Home = React.lazy(() => import("./components/Home/Home"));
const Services = React.lazy(() => import("./pages/Services"));

ReactDOM.render(
  <Suspense fallback={<p>Loading </p>}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="service/:servicename" element={<Services />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
