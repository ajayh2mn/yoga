import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import logoImage from "../assets/AHAM.jpg";
import "./Header.css"; // Import external CSS file

const Header = () => {
  return (
    <nav className="navbar">
      {/* Left Side - Brand Name */}
      <Link to="/"> {/* Wrap the logo inside a Link component */}
        <img src={logoImage} alt="Logo" className="navbar-logo" />
      </Link>
      <div className="navbar-brand">AHAM BRAHMASMI FOUNDATION</div>

      {/* Center - Navigation Links */}
      <ul className="nav-links">
        <li><a href="#about">About Us</a></li>
        <li><Link to="/program">Program</Link></li> {/* Updated Link */}
        <li><a href="#resource">Resource</a></li>
      </ul>

      {/* Right Side - Buttons
      <div className="nav-buttons">
        <a href="#join" className="btn primary">Join Us</a>
        <a href="#learn" className="btn secondary">Learn More</a>
      </div> */}
    </nav>
  );
};

export default Header;
