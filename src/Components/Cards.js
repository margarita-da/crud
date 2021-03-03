import React, { useState, useEffect, useContext } from "react";
import PostsContext from "./PostsContext";
import { Link } from "react-router-dom";
import BtnCreated from "./BtnCreated";
import { Card, Row } from "react-bootstrap";
export default function Cards() {
  // const { posts } = useContext(PostsContext);
  // useEffect(() => {
  //   setCard(posts);
  // }, []);
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7777/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setCard(result);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
      <Row className="mt-4 justify-content-md-center">
        <BtnCreated />
      </Row>
      <Row className="mt-4 justify-content-md-center">
        {card.length !== 0 ? (
          card.map((item) => (
            <Link
              to={`/posts/${item.id}`}
              className="text-decoration-none text-reset"
              key={item.id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/500/0000FF/808080"
                />
                <Card.Body>
                  <Card.Text>{item.content}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          ))
        ) : (
          <div className="alert alert-secondary" role="alert">
            Постов нет
          </div>
        )}
      </Row>
    </>
  );
}
