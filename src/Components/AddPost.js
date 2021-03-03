import React, { useState } from "react";
import { Form, Button, Row } from "react-bootstrap";
import { nanoid } from "nanoid";

export default function AddPost({ history }) {
  const [value, setValue] = useState();
  const valueForm = (e) => {
    setValue(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    const obj = {
      id: 0,
      content: value,
    };

    fetch("http://localhost:7777/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(obj),
    }).catch(function (error) {
      console.log(error);
    });

    setValue("");
    history.push("/");
  };
  function toHome(e) {
    e.preventDefault();
    history.push("/");
  }
  return (
    <Row className="mt-4 justify-content-md-center">
      <div className="form-wr " style={{ textAlign: "right" }}>
        <Button className="mb-2" onClick={toHome} variant="outline-danger">
          x
        </Button>
        <Form onSubmit={handleForm}>
          <Form.Control
            as="textarea"
            name="addPost"
            style={{ width: "18rem" }}
            rows="3"
            onChange={valueForm}
            value={value}
          />
          <Button className="mt-4" variant="primary" type="submit">
            Опубликовать
          </Button>
        </Form>
      </div>
    </Row>
  );
}
