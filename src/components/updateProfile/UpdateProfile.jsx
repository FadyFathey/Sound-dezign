import React, { useRef, useState } from "react";
import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { currentUser, updateUserEmail, updateUserPassword } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();
  const navigate = useNavigate();
  const handelSubmit = (e) => {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      setError("passwords did not match");
    }
    const promises = [];
    setLoading(true);
    setError("");
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateUserEmail(currentUser, emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updateUserPassword(currentUser, passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => setLoading(false));
  };
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">Update Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handelSubmit}>
              <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  ref={emailRef}
                  required
                  defaultValue={currentUser && currentUser.email}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="password">Password</Form.Label>
                <Form.Control type="password" id="password" ref={passwordRef} />
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
                Update
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-full text-center mt-2">
          <Link to="/">Cancel</Link>
        </div>
      </div>
    </Container>
  );
};

export default UpdateProfile;
