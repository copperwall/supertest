import React from "react";
import { Router, Link, Location } from "@reach/router";

function Home() {
  return (
    <>
      <h2>Super Index</h2>
      <ul>
        <li>
          <Link to="dashboard">Dashboard</Link>
        </li>
      </ul>
    </>
  );
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function Whoops() {
  return <h3>whoops default</h3>;
}

export default () => (
  <Router basepath="/super">
    <Dashboard path="/dashboard" />
    <Home path="/" />
    <Whoops default />
  </Router>
);
