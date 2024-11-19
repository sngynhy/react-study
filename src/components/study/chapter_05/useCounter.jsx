/* Custom Hook
 - 여러 컴포넌트에서 반복적으로 사용되는 로직을 Hook으로 만들어 재사용하기 위함
 - Custom Hook의 이름은 반드시 'use'로 시작하고 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수
 - Custom Hook도 마찬가지로 외부 컴포넌트에서 사용 시 '최상위' 레벨에서만 호출해야함
 - 파라미터의 제약이 없고, 일반 JS의 함수와 같지만 이름을 use로 표현함으로써 Hook이라는 것을 명시

    쉽게 공통 함수라고 생각하면 됨!
 */
import React, { useState, useEffect } from "react";

// Custom Hook 생성
function useCounter(initalValue) {
  // console.log('initalValuei', initalValue)
  const [count, setCount] = useState(initalValue);

  function increaseCount() {
    // prev를 인자로 받아 현재 값으로 처리 (혹시 count 값의 변화가 있었을 수도 있기 때문!)
    setCount((prev) => prev + 1);
  }
  const decreaseCount = () => setCount((prev) => Math.max(prev - 1, 0));

  return [count, increaseCount, decreaseCount];
}

export default useCounter;
