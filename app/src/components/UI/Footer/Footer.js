import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";  // Importing Link

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="heading">© 2023 U-universe</h2>
      <h2 className="heading">
        <Link to="/contactus">Contact Us</Link>  {/* Link to Contact Us page */}
      </h2>
      <h2 className="heading">
        <Link to="/privacy">Privacy Policy</Link>  {/* Link to Privacy Policy page */}
      </h2>
    </footer>
  );
};

export default Footer;
