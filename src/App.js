import React from "react";
import "./assets/css/App.css";
import Router from "./router";

// 컴포넌트명은 무조건 대문자로!
// (리액트는 소문자로 시작하는 태그를 'Dom 태그'로 인식하기 때문!)
function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
