import React from "react";
import { Button } from "@mui/material";
import "./Header.scss";
import logo from '../../../assets/logo.svg'; // Update the path here

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" className="logo" />
      <h1 className="heading">Entrepreneurship Education</h1>
      <nav className="menu">
        <ul className="menu-list">
          <li>
          {/* <Button
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
          </Button> */}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
