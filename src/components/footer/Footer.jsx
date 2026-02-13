import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark text-light pt-5">
      <Container>
        <Row className="mb-4">
          {/* Brand */}
          <Col md={4}>
            <h3 className="fw-bold text-warning">Tomato.</h3>
            <p className="">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>

            <div className="d-flex gap-3 mt-3">
              <span className="social-icon">
                <FaFacebookF />
              </span>
              <span className="social-icon">
                <FaTwitter />
              </span>
              <span className="social-icon">
                <FaLinkedinIn />
              </span>
            </div>
          </Col>

          {/* Company */}
          <Col md={4}>
            <h5 className="fw-semibold mb-3">COMPANY</h5>
            <ul className="list-unstyled">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={4}>
            <h5 className="fw-semibold mb-3">GET IN TOUCH</h5>
            <p className=" mb-1">+1-212-456-7890</p>
            <p className="">contact@tomato.com</p>
          </Col>
        </Row>

        <hr className="border-secondary" />

        <Row>
          <Col className="text-center py-3">
            Copyright © 2024 Tomato.com – All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
