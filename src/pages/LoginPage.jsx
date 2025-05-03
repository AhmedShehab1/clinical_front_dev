import { useState, useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Button, Form } from "react-bootstrap";
import InputField from "../Components/InputField";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [formErrors, setFormErrors] = useState({});
  const emailField = useRef();
  const passwordField = useRef();

  useEffect(() => {
    emailField.current.focus();
  }, []);

  const onSubmit = (ev) => {
    ev.preventDefault();

    const email = emailField.current.value;
    const password = passwordField.current.value;

    const errors = {};
    if (!email) {
      errors.email = "Email must not be empty.";
    }
    if (!password) {
      errors.password = "Password must not be empty.";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
  };

  return (
    <Container>
      <h1>Login form</h1>
      <Form onSubmit={onSubmit}>
        <InputField
          name="email"
          label="Email address"
          error={formErrors.email}
          fieldRef={emailField}
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          error={formErrors.password}
          fieldRef={passwordField}
        />
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      <hr />
      <p>
        Don&apos;t have an account? <Link to="/signup">Register here</Link>!
      </p>
    </Container>
  );
}
