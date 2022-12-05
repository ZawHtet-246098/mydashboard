import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import InnerDashboard from "./components/InnerDashboard";

const App = () => {
  return (
    <BrowserRouter>
      {/* <Login /> */}
      <InnerDashboard />
    </BrowserRouter>
  );
};

export default App;
