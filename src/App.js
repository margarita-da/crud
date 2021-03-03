import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Cards from "./Components/Cards";
import AddPost from "./Components/AddPost";
import VuiPost from "./Components/VuiPost";
import PostsProvider from "./Components/PostsProvider";
function App() {
  return (
    <Container>
      <Router>
        <div className="page">
          <Switch>
            <Route path="/posts/new" component={AddPost} />

            <PostsProvider>
              <Route path="/" exact component={Cards} />
              <Route
                path="/posts/:id([0-9]+)?:new([a-zA-Z]+)?"
                component={VuiPost}
              />
            </PostsProvider>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
