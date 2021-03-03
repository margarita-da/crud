import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Row } from "react-bootstrap";
import EditPost from "./EditPost";
import PostsContext from "./PostsContext";

export default function VuiPost({ match, history }) {
  const [editCard, setEditCard] = useState(false);
  const [vui, setVui] = useState([]);
  // const { posts } = useContext(PostsContext);

  useEffect(() => {
    fetch("http://localhost:7777/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        const obj = result.filter((a) => {
          return a.id === Number(match.params.id);
        });
        setVui(obj);
      })
      .catch((e) => console.log(e));
  }, []);

  function onToggle() {
    setEditCard(true);
  }
  function delPost(e) {
    fetch(`http://localhost:7777/posts/${match.params.id}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }).catch(function (error) {
      console.log(error);
    });
    history.push("/");
  }
  function updatePosts(value) {
    const obj = {
      id: Number(match.params.id),
      content: value,
    };

    fetch("http://localhost:7777/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(obj),
    }).catch(function (error) {
      console.log(error);
    });
    setVui([obj]);
    setEditCard(false);
  }
  function goBack() {
    setEditCard(false);
  }

  return (
    <Row className="mt-4 justify-content-md-center">
      {editCard ? (
        <EditPost content={vui} goBack={goBack} updatePosts={updatePosts} />
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/500/0000FF/808080"
          />
          <Card.Body>
            <Card.Text>{vui.map((a) => a.content)}</Card.Text>
            <Link onClick={onToggle} className="btn btn-warning mr-1">
              Изменить
            </Link>
            <Button onClick={delPost} variant="danger">
              Удалить
            </Button>
          </Card.Body>
        </Card>
      )}
    </Row>
  );
}
