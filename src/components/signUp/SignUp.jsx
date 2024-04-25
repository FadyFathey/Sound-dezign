import React, { useRef } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";

const SignUp = () => {
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      setError("passwords did not match");
    }
    try {
      setError("");
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("failed to create ana account ");
      setLoading(false);
    }
  };
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Sign Up</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handelSubmit}>
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control type="email" id="email" ref={emailRef} required />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control
                  type="password"
                  id="password"
                  ref={passwordRef}
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="password-confirmation">
                  Password Confirmation
                </Form.Label>
                <Form.Control
                  type="password"
                  id="password-confirmation"
                  ref={passwordConfirmationRef}
                />
              </Form.Group>
              <Button
                disabled={loading}
                className="w-100 mt-3"
                variant="primary"
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-full text-center mt-2">
          <Link to="/login">Already Have An Account ?</Link>
        </div>
      </div>
    </Container>
  );
};

export default SignUp;
