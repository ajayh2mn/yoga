import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/AHAM.jpg";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-card">
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/">
            <img src={logoImage} alt="Logo" className="navbar-logo" />
          </Link>
          <div className="navbar-brand">AHAM BRAHMASMI FOUNDATION</div>
        </div>

        <div className="dots-menu" onClick={toggleMenu}>
          &#8942;
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
  <li><Link to="/AboutUs" onClick={() => setMenuOpen(false)}>AboutUs</Link></li>
  <li><Link to="/program" onClick={() => setMenuOpen(false)}>Program</Link></li>
  {/* <li><a href="#resource" onClick={() => setMenuOpen(false)}>Resource</a></li> */}
  <li><Link to="/ContactUs" onClick={() => setMenuOpen(false)}>Contact US</Link></li>
</ul>
      </nav>
    </div>
  );
};

export default Header;
