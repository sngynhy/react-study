import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Test from "./pages/Test";
import State from "./pages/State";
import UserList from "./pages/UserList";
import Study from "./pages/Study";

function Rotuer() {
  return (
    <div>
      <nav className="black-nav">
        <Link to="/">Home</Link>
        {/* <Link to="/state">State</Link> */}
        {/* <Link to="/test">Test</Link> */}
        {/* <Link to="/users">UserList</Link> */}
        <Link to="/study">Study</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/state" element={<State />} /> */}
        {/* <Route path="/test" element={<Test />} /> */}
        {/* <Route path="/users" element={<UserList />} /> */}
        <Route path="/study" element={<Study />} />
      </Routes>
    </div>
  );
}

export default Rotuer;
