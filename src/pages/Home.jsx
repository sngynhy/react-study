import React, { useState } from "react";
import Lifecycle from "../components/study/LifeCycle";

const Home = () => {
  let [colorIndex, setColorIndex] = useState(1);
  const colorList = ["red", "yellow", "green", "blue", "white", "black"];
  function changeColor(e) {
    setColorIndex(e.target.value);
  }

  const [isActive, setIsActive] = useState(false);
  function handleButtonClick() {
    setIsActive(!isActive);
  }
  function lifeCycleTestComponent() {
    return (
      <div>
        <select onChange={changeColor} value={colorIndex}>
          {colorList.map((color, i) => (
            <option key={i} value={i}>
              {color}
            </option>
          ))}
        </select>
        <Lifecycle color={colorList[colorIndex]} />
      </div>
    );
  }
  return (
    <div>
      <h1>🎈 Home Page 🎈</h1>
      {/* <button onClick={() => {setIsActive(!isActive)}}> */}
      <button onClick={handleButtonClick}>
        {isActive
          ? "Deactivate LifeCycle Component"
          : "Activate LifeCycle Component"}
      </button>
      {isActive && lifeCycleTestComponent()}
    </div>
  );
};

export default Home;
