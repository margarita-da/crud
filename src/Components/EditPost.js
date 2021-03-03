import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";

export default function EditPost({ content, updatePosts, goBack }) {
  const [value, setValue] = useState(content.map((a) => a.content));
  const valueForm = (e) => {
    setValue(e.target.value);
  };
  function handleForm(e) {
    e.preventDefault();
    updatePosts(value);
    setValue("");
  }
  function onGoBack(e) {
    e.preventDefault();
    goBack();
  }
  return (
    <Row className="mt-4 justify-content-md-center">
      <div className="form-wr " style={{ textAlign: "right" }}>
        <Button className="mb-2" onClick={onGoBack} variant="outline-danger">
          x
        </Button>
        <Form onSubmit={handleForm}>
          <Form.Control
            as="textarea"
            value={value}
            style={{ width: "18rem" }}
            rows="3"
            onChange={valueForm}
          />
          <Button className="mt-4" variant="primary" type="submit">
            Сохранить
          </Button>
        </Form>
      </div>
    </Row>
  );
}
