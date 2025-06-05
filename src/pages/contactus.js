import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
// import { FaWhatsapp } from "react-icons/fa";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

import "./Contact.css";

const Contact = () => {
  const handleDial = () => {
    window.location.href = "tel:+918489946930";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/918489946930", "_blank");
  };

  return (
    <Container fluid className="contact-container">
      <Row className="contact-row">
        <Col md={5} className="contact-info">
          <h3>Contact Information</h3>
          <p>Say something to start a live chat!</p>
          <ul>
            <li>
              <i className="fas fa-phone"></i> +91 8489946930
            </li>
            <li>
              <i className="fas fa-envelope"></i> aham@gmail.com
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i> 26, ganathikkam pillai street kallukuzhi trichy-20
            </li>
          </ul>
          <div className="social-icons1">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </Col>
        <Col md={7} className="contact-form">
          <h3>Contact Us</h3>
          <p>Any questions or remarks? Just contact us directly!</p>
          <div className="button-row    ">
            <Button variant="success" onClick={handleDial}>
            <FaPhoneAlt className="me-2" />
              Dial to Phone
            </Button>
            <Button variant="success" className="whatsapp-btn" onClick={handleWhatsApp}>
              <FaWhatsapp className="phone-icon" /> WhatsApp
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
