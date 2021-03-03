import React, { useState, useEffect } from "react";
import PostsContext from "./PostsContext";
export default function PostsProvider(props) {
  const [posts, setPosts] = useState();
  useEffect(() => {
    fetch("http://localhost:7777/posts", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        setPosts(result);
      })
      .catch((e) => console.log(e));
  }, []);
  return (
    <PostsContext.Provider value={{ posts }}>
      {props.children}
    </PostsContext.Provider>
  );
}
