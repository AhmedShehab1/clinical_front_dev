import { useContext } from "react";
import { Alert, Collapse } from "react-bootstrap";
import { FlashContext } from "../contexts/FlashProvider";

export default function FlashMessage() {
  const { flashMessage, visible, hideFlash } = useContext(FlashContext);

  return (
    <Collapse in={visible}>
      <div>
        <Alert
          dismissible
          onClose={hideFlash}
          variant={flashMessage.type || "info"}
        >
          {flashMessage.message}
        </Alert>
      </div>
    </Collapse>
  );
}
