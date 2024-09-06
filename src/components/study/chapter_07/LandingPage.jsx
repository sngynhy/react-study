import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function onClickLogin() {
    setIsLoggedIn(true);
  }
  function onClickLogout() {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <h1>- Conditional Rendering -</h1>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div style={{ padding: 16 }}>💡 리액트 조건부 렌더링 학습 💡</div>
    </div>
  );
}

export default LandingPage;
