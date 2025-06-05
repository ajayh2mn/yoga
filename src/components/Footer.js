import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h3>About Us</h3>
          <p>
            We are committed to promoting wellness through yoga and mindfulness.
            Join us on the path to inner peace and holistic health.
          </p>
        </div>
 
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="/program">Programs</a></li>
            <li><a href="/ContactUs">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: info@yogafoundation.org</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: 26, ganathikkam pillai street kallukuzhi trichy-20</p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Yoga Foundation. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
