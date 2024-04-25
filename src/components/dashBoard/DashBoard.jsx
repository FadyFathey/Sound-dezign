import React, { useState } from "react";
import { Button, Card, Container, Alert } from "react-bootstrap";
import { useAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const { currentUser, logOut } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  // Function to handle logout
  const handleLogout = async () => {
    try {
      // Attempt to log out the user
      await logOut();
      // Navigate to home page after successful logout
      navigate("/");
    } catch (error) {
      // Set error message if logout fails
      setError("Failed to log out");
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
            <h2 className="text-center mb-4">Profile</h2>
            {/* Display error message if it exists */}
            {error && <Alert variant="danger">{error}</Alert>}

            {/* Display welcome message if user is logged in, otherwise display "not logged in" */}
            {currentUser && currentUser.email ? (
              <strong>Welcome: {currentUser.email}</strong>
            ) : (
              <strong className="d-flex align-items-center justify-content-center">
                Not logged in Or Not Registered
              </strong>
            )}

            {/* Link to update profile page */}
            <div className="w-100 text-center mt-3">
              {currentUser && currentUser.email ? (
                <Link className="btn btn-primary" to="/update-profile">
                  Update Your Profile
                </Link>
              ) : (
                ""
              )}
            </div>
          </Card.Body>
        </Card>
        {/* Logout button */}
        <div className="w-100 mt-2 text-center">
          {currentUser && currentUser.email ? (
            <Link className="btn btn-primary" to="/update-profile">
              Update Your Profile
            </Link>
          ) : (
            <div className="d-flex  align-items-center justify-content-center">
              <Link className="btn btn-primary m-3 " to="/sign-up">
                sign up
              </Link>
              <Link className="btn btn-primary" to="/login">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default DashBoard;
