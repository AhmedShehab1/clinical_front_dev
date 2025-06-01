import Body from "../Components/Body";
import { Form, Button } from "react-bootstrap";
import InputField from "../Components/InputField";
import { useRef, useState, useEffect } from "react";
import { useApi } from "../contexts/ApiProvider";
import { useFlash } from "../contexts/FlashProvider";

export default function ResetRequestPage() {
  const emailField = useRef();
  const [formErrors, setFormErrors] = useState({});
  const api = useApi();
  const flash = useFlash();

  useEffect(() => {
    emailField.current.focus();
  });

  const onSubmit = async (ev) => {
    ev.preventDefault();

    const resp = await api.post("/tokens/reset", {
      email: emailField.current.value,
    });

    if (resp.ok) {
      setFormErrors({});
      emailField.current.value = "";
      flash(
        "You will receive an email with instructions " +
          "to reset your password.",
        "info",
      );
    } else {
      setFormErrors(resp.body.errors.json);
    }
  };

  return (
    <Body>
      <h1>Reset Password</h1>
      <Form onSubmit={onSubmit}>
        <InputField
          name="email"
          label="Email Address"
          fieldRef={emailField}
          error={formErrors.email}
        />
        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      </Form>
    </Body>
  );
}
