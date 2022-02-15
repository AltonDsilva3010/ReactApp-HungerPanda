import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar1">
        <a href="/" className="logo">
          Hunger Panda
        </a>
        <a href="/getapp" className="getapp">
          Get App
        </a>

        <div className="header-right">
          <a href="/login">Login</a>
          <a href="/register">SignUp</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
