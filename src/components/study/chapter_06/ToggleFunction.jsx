import React, { useState } from "react";

function ToggleFunction(props) {
  const [isToggleOn, setIsToggleOn] = useState(true);

  // 방법1) 함수 안에 함수로 정의
  function handleClick1() {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  }

  // 방법2) arrow function을 사용하여 정의
  const handleClick2 = () => {
    setIsToggleOn((isToggleOn) => !isToggleOn);
  };

  return (
    <div>
      <h1>- Handling Events by Function Component -</h1>
      <button
        onClick={handleClick1}
        style={{
          backgroundColor: isToggleOn ? "yellow" : "lightgrey",
        }}
      >
        {isToggleOn ? "켜짐" : "꺼짐"}
      </button>
    </div>
  );
}

export default ToggleFunction;
