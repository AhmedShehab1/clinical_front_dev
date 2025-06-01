import { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import InputField from "../Components/InputField";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Body from "../Components/Body";
import { useFlash } from "../contexts/FlashProvider";
import { useUser } from "../contexts/UserProvider";

export default function LoginPage() {
  const [formErrors, setFormErrors] = useState({});
  const emailField = useRef();
  const passwordField = useRef();

  const { login } = useUser();
  const flash = useFlash();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    emailField.current.focus();
  }, []);

  const onSubmit = async (ev) => {
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

    const result = await login(email, password);
    if (result.ok === "fail") {
      flash("Invalid email or password", "danger");
    } else if (result.ok === "ok") {
      let next = "/profile";
      if (location?.state?.next) {
        next = location.state.next;
      }
      navigate(next);
    }
  };

  return (
    <Body>
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
        Forgot your password ? You can <Link to="/reset-request">reset it</Link>
        .
      </p>
      <p>
        Don&apos;t have an account? <Link to="/signup">Register here</Link>!
      </p>
    </Body>
  );
}
