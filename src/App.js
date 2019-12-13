import React from "react";
import Header from "./layout/Header/Header";
import "./App.css";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";

const App = () => (
  <div className="App">
    <Header />
    <Login />
    <Dashboard />
  </div>
);

export default App;
