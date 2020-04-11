import { hot } from "react-hot-loader/root";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

import "./index.css";

const render = (Component) =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(App));
