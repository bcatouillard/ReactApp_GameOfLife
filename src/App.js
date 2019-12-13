import React from "react";
import Header from "./layout/Header/Header";
import "./App.css";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <div className="App">
    <Header />
    <Router>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="login">Login</Link>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Router>
  </div>
);

export default App;
