import React from "react";
import "./Header.css";

const Header = ({ subtitle }) => (
  <header className="header">
    <h1 className="header_title">Game of Life</h1>
    <h2 className="header_subtitle">{subtitle}</h2>
  </header>
);

export default Header;
