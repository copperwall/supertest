import React from "react";
import { Link } from "gatsby";
import "./main.css";

const App = () => (
  <>
    <h1>Just an index</h1>
    <ul>
      <li>
        <Link to="/page/1">Pages</Link>
      </li>
      <li>
        <Link to="/super">Super</Link>
      </li>
    </ul>
  </>
);

export default App;
