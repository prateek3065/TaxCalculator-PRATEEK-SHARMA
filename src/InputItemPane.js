import React from "react";
import { Form, Container, Button } from "react-bootstrap";

import ProcessString from "./ProcessString";
export default function InputItemPane(setString, ref) {
  function handleSubmit(e) {
    e.preventDefault();
    const enteredString = ref.current.value;
    if (enteredString === "") return;

    ref.current.value = "";
    ProcessString(enteredString, setString);
  }
  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-3">
          <Form.Label>Enter the item</Form.Label>
          <Form.Control
            type="text"
            placeholder="type here..."
            ref={ref}
            required
          />
          <Form.Text className="text-muted">
            Last word shold be the Amount of the item
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          //onClick={}
        >
          Calculate Tax
        </Button>
      </Form>
    </Container>
  );
}
