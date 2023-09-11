import React from "react";
import { Button } from "@mui/material";
import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      <h1 className="heading">U-universe</h1>
      <nav className="menu">
        <ul className="menu-list">
          <li>
          <Button
            variant="contained"
            style={{
              backgroundColor: 'black',
              color: 'white',
              display: 'flex',
              alignItems: 'center', // Align items vertically
            }}
            href="/sign-in"
          >
            Sign In
          </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};



export default Header;

