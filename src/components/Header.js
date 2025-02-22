import React from "react";
import logoImage from "../assets/AHAM.jpg";
import "./Header.css"; // Import external CSS file

const Header = () => {
  return (
    <nav className="navbar">
      {/* Left Side - Brand Name */}
      <img src={logoImage} alt="Logo" className="navbar-logo" />
      <div className="navbar-brand">AHAM BRAHMASMI FOUNDATION</div>

      {/* Center - Navigation Links */}
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><a href="#program">Program</a></li>
        <li><a href="#resource">Resource</a></li>
      </ul>

      {/* Right Side - Buttons */}
      <div className="nav-buttons">
        <a href="#join" className="btn primary">Join Us</a>
        <a href="#learn" className="btn secondary">Learn More</a>
      </div>
    </nav>
  );
};

export default Header;
