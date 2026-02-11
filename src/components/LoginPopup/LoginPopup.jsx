import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { assets } from "../../Assests/assets/frontend_assets/assets";

function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("Sign Up");

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", zIndex: 1050 }}
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={6} lg={4}>
            <Card className="shadow rounded-4">
              
              {/* Header */}
              <Card.Header className="d-flex justify-content-between align-items-center bg-white border-0">
                <h5 className="mb-0 fw-bold">{currState}</h5>
                <img
                  src={assets.cross_icon}
                  alt="close"
                  style={{ cursor: "pointer", width: 20 }}
                  onClick={() => setShowLogin(false)}
                />
              </Card.Header>

              {/* Body */}
              <Card.Body>
                <Form>
                  {currState === "Login" ? null : (
                    <Form.Group className="mb-3">
                      <Form.Control
                        type="text"
                        placeholder="Your name"
                        required
                      />
                    </Form.Group>
                  )}

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Your email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    className="w-100 rounded-pill"
                    variant="danger"
                  >
                    {currState === "Sign Up" ? "Create account" : "Login"}
                  </Button>
                </Form>
              </Card.Body>

              {/* Footer */}
              <Card.Footer className="bg-white border-0">
                <Form.Check
                  className="mb-2"
                  label="By continuing, I agree to the terms of use & privacy policy"
                  required
                />

                {currState === "Login" ? (
                  <p className="text-center mb-0">
                    Create a new account?{" "}
                    <span
                      className="text-danger fw-semibold"
                      style={{ cursor: "pointer" }}
                      onClick={() => setCurrState("Sign Up")}
                    >
                      Click here
                    </span>
                  </p>
                ) : (
                  <p className="text-center mb-0">
                    Already have an account?{" "}
                    <span
                      className="text-danger fw-semibold"
                      style={{ cursor: "pointer" }}
                      onClick={() => setCurrState("Login")}
                    >
                      Login here
                    </span>
                  </p>
                )}
              </Card.Footer>

            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default LoginPopup;
