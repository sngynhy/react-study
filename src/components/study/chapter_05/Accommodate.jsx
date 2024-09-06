import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

// Custom Hook 사용
// 여러 개의 컴포넌트에서 하나의 Custom Hook을 사용할 때
// 컴포넌트 내부에 있는 모든 state와 effects는 전부 분리되어 있음

const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("------------------");
    console.log("useEffect() is called");
    console.log(`isFull: ${isFull}`);

    // 의존성 배열이 없는 해당 hook은 컴포넌트가 업데이트될 때마다 호출
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log("==================");
    console.log(`Current count value: ${count}`);
    // 해당 hook은 의존성 배열의 항목 count의 값이 변경될 때마다 호출
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <h1>- Custom Hook 예제 -</h1>
      <p>총 {count}명 수용했습니다.</p>

      <button
        onClick={increaseCount}
        disabled={isFull}
        style={{ marginRight: 5 }}
      >
        입장
      </button>
      <button onClick={decreaseCount}>퇴장</button>

      {isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
    </div>
  );
}

export default Accommodate;
