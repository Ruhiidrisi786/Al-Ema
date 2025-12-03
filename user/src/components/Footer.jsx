import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Footer = () => {
  return (
    <footer style={{ padding: "60px 0 20px", textAlign: "center"}}>
      <Container className="sm-12">
        <Row className="gy-4">
          
          {/* Left Section - Company Info */}
          <Col xs={12} md={4}>
            <h4
              className="fw-bold"
              style={{ color: "#0987a0", letterSpacing: "1px" }}
            >
              AL-EMA INDUSTRIES
            </h4>
            <p className="text-muted fs-6 mt-2">Premium Crude Oil Supply</p>
          </Col>

          {/* Middle Section - Quick Links */}
          <Col xs={12} md={4}>
            <h5 className="fw-semibold mb-3">Quick Links</h5>
            <ul className="list-unstyled text-muted fs-6">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Right Section - Contact Info */}
          <Col xs={12} md={4}>
            <h5 className="fw-semibold mb-3">Contact Info</h5>
            <p className="text-muted mb-1">info@alemaindustries.com</p>
            <p className="text-muted mb-1">+91 9004707592</p>
            <p className="text-muted">
              Malad (W), India
            </p>
          </Col>
        </Row>

        {/* Divider Line */}
        <hr className="mt-5" />

        {/* Copyright Section */}
        <div className="text-center text-muted py-2">
          © 2024 AL-EMA INDUSTRIES. All rights reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

