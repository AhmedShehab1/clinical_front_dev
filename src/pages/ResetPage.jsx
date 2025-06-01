import Body from "../Components/Body";
import { useState, useEffect, useRef } from "react";
import { useApi } from "../contexts/ApiProvider";
import { useFlash } from "../contexts/FlashProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import InputField from "../Components/InputField";

export default function ResetPage() {
  const [formErrors, setFormErrors] = useState({});
  const api = useApi();
  const flash = useFlash();
  const { search } = useLocation();
  const navigate = useNavigate();
  const passwordField = useRef();
  const password2Field = useRef();
  const token = new URLSearchParams(search).get("token");

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else {
      passwordField.current.focus();
    }
  }, [token, navigate]);

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (password2Field.current.value !== passwordField.current.value) {
      setFormErrors({ password2: "New passwords don't match" });
    } else {
      const resp = await api.put("/tokens/reset", {
        token,
        new_password: passwordField.current.value,
      });
      if (resp.ok) {
        setFormErrors({});
        flash("Your password has been reset!", "success");
        navigate("/login");
      } else {
        if (resp.body.errors.json.new_password) {
          setFormErrors(resp.body.errors.json);
        } else {
          flash("Password could not be reset. Please try again.", "danger");
          navigate("reset-request");
        }
      }
    }
  };

  return (
    <Body>
      <Form onSubmit={onSubmit}>
        <InputField
          name="password"
          fieldRef={passwordField}
          label="New Password"
          type="password"
          error={formErrors.password}
        ></InputField>
        <InputField
          name="password"
          fieldRef={password2Field}
          label="New Password Again"
          type="password"
          error={formErrors.password2}
        ></InputField>
        <Button type="submit" variant="primary">
          Reset Password
        </Button>
      </Form>
    </Body>
  );
}
