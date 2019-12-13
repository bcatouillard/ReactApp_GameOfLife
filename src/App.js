import React from "react";
import "./App.css";
import Login from "./Login/Login.container";
import Dashboard from "./Dashboard/Dashboard.container";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <div className="App">
    <Router>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="login">Login</Link>
      <Route path="/login" component={Login}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
    </Router>
  </div>
);

export default App;
