import React from "react";
import { Button } from "@mui/material";
import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      <h1 className="heading">U-universe</h1>
      <nav className="menu">
        <ul className="menu-list">
          <li><a href="/">Home</a></li>
          <li><a href="/listen">Listen</a></li>
          <li><a href="/about">About</a></li>
          <li>
            {/* Use the Material-UI Button for "Sign In" */}
            <Button variant="contained" style={{ backgroundColor: 'black', color: 'white' }} href="/sign-in">
              Sign In
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

