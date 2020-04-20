import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Profile from "../profile/Profile";
import "./Blog.css";
import Headline from "../components/Headline";
import { add } from "../components/util";

export default function Blog() {
  console.log("add", add(2, 2));
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Articles />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Articles() {
  return (
    <div className="blog">
      <Headline>Articles</Headline>
      <article>
        <h3>Article 1</h3>
        <p>Lorem ipsum</p>
      </article>
      <article>
        <h3>Article 2</h3>
        <p>Lorem ipsum</p>
      </article>
    </div>
  );
}
