import React from "react";
import "./App.css";
import {  Route } from "react-router-dom";
import Dashboard from "./components/dashboard/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <React.Fragment>
      <ToastContainer />
      <Route path="/" exact component={Dashboard} />
    </React.Fragment>
  );
}

export default App;
