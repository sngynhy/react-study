import React, { useState, useEffect, useCallback, useRef } from "react";

function Hook(props) {
  const [count, setCount] = useState(0);
  // componentDidMount, componentDidUpdate와 비슷하게 작동
  useEffect(() => {
    // 브라우저 API를 사용해서 document의 title을 업데이트함
    document.title = `You clicked ${count} times.`;
  });

  return (
    <div>
      <h1>- Hook 예제 -</h1>
      <h2>1) useEffect</h2>
      <span>총 {count}번 클릭하였습니다. </span>
      <button onClick={() => setCount(count + 1)}>클릭</button>
      <br />
      <br />
      <h2>2) useRef</h2>
      <TextInputWithFocusButton />
      <br />
      <h2>3) useRef & useCallback</h2>
      <MeasureExample />
    </div>
  );
}

function TextInputWithFocusButton(props) {
  const inputElem = useRef(null);
  const onButtonClick = () => {
    // `current`는 마운트된 input element를 가리킴
    inputElem.current.focus();
  };

  return (
    <div>
      <input ref={inputElem} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

function MeasureExample(props) {
  const [height, setHeight] = useState(0);
  const mesuredRef = useCallback((node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height);
    }
  }, []);

  return (
    <div>
      <h3 ref={mesuredRef} style={{ border: "1px solid lightgrey" }}>
        이 영역의 높이는 몇 px일까?
      </h3>
      <h4>위 헤더의 높이는 {Math.round(height)}px 입니다.</h4>
    </div>
  );
}
export default Hook;
