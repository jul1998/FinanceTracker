import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser, loginUser } from "../store/slices/userSlicer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
const SignupPage = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { userData, error, status } = useSelector((state) => state.user);
  
  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleSignupInputChange = (e) => {
    setSignupFormData({
      ...signupFormData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginInputChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(signupFormData)).then((response) => {
      console.log(response);
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(loginForm)).then((response) => {
      console.log(response);
    });
  };

  console.log(signupFormData)

  return (
    <Container>
      <Row>
        <Col>
          <h2>Sign Up</h2>
          <Form onSubmit={handleSignupSubmit}>
            <Form.Group controlId="signupUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={signupFormData.username}
                onChange={handleSignupInputChange}
              />
            </Form.Group>
            <Form.Group controlId="signupEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={signupFormData.email}
                onChange={handleSignupInputChange}
              />
            </Form.Group>
            <Form.Group controlId="signupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={signupFormData.password}
                onChange={handleSignupInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
        <Col>
          <h2>Login</h2>
          <Form onSubmit={handleLoginSubmit}>
            <Form.Group controlId="loginUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="email"
                value={loginForm.email}
                onChange={handleLoginInputChange}
              />
            </Form.Group>
            <Form.Group controlId="loginPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginInputChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignupPage;
