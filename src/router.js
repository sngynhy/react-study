import React from "react";
import { Routes, Route, Link } from "react-router-dom";
// page
import Home from "pages/Home";
import Test from "pages/Test";
import State from "pages/State";
import UserList from "pages/UserList";
import Study from "pages/Study";
import MainPage from "components/mini_blog/page/MainPage";
import PostWritePage from "components/mini_blog/page/PostWritePage";
import PostViewPage from "components/mini_blog/page/PostViewPage";

function Rotuer() {
  return (
    <div>
      <nav className="black-nav">
        <Link to="/">Home</Link>
        {/* <Link to="/state">State</Link> */}
        {/* <Link to="/test">Test</Link> */}
        {/* <Link to="/users">UserList</Link> */}
        <Link to="/study">Study</Link>
        <Link to="/mini-blog">mini_blog</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/state" element={<State />} /> */}
        {/* <Route path="/test" element={<Test />} /> */}
        {/* <Route path="/users" element={<UserList />} /> */}
        <Route path="/study" element={<Study />} />
        <Route path="/study" element={<Study />} />
        <Route path="/mini-blog" element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />}></Route>
        <Route path="post/:postId" element={<PostViewPage />}></Route>
      </Routes>
    </div>
  );
}

export default Rotuer;
