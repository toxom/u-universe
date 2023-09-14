import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = ({ openContactUsModal, openPrivacyModal, openTermsModal }) => {
  const handleContactUsClick = (e) => {
    e.preventDefault();
    openContactUsModal();
  };

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    openPrivacyModal();
  };

  const handleTermsClick = (e) => {
    e.preventDefault();
    openTermsModal();
  };


  return (
    <footer className="footer">
      <h2 className="heading">© 2023 U-universe. All Rights Reserved.</h2>
      <h2 className="heading">
        <a href="#" onClick={handleContactUsClick}>Contact Us</a>
      </h2>
      <h2 className="heading">
        <a href="#" onClick={handlePrivacyClick}>Privacy Policy</a>
      </h2>
      <h2 className="heading">
        <a href="#" onClick={handleTermsClick}>Terms</a>
      </h2>
    </footer>
  );
};

export default Footer;
