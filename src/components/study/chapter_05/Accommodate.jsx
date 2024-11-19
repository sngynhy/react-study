import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

// Custom Hook 사용
// 여러 개의 컴포넌트에서 하나의 Custom Hook을 사용할 때
// 컴포넌트 내부에 있는 모든 state와 effects는 전부 분리되어 있음

const MAX_CAPACITY = 10;

function Accommodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(3); // props로 초기값 설정 가능

  useEffect(() => {
    // 의존성 배열을 빈 배열로 설정 시 해당 훅은 처음 렌더링 시에만 한 번 호출
    // 감지할 대상이 없기 때문!
    console.log('CREATED :)')
    console.log('CALL THE API... << 렌더링 시 한 번 호출')

    return (
      // 해당 부분은 컴포넌트가 마운트 해제되기 전에 실행됨
      console.log('DESTROYED :(')
    )
  }, [])
  // 아래와 같이 적용
  // function destroyedFunc () {
  //   console.log('destroyed :(')
  // }
  // function createFunc () {
  //   console.log('created :)')
  //   return destroyedFunc()
  // }
  // useEffect(createFunc, [])

  useEffect(() => {
    console.log("------------------ 해당 훅은 컴포넌트 업데이트될 때마다 호출");
    console.log("useEffect() is called");
    console.log(`isFull: ${isFull}`);

    // 의존성 배열이 없는 해당 hook은 컴포넌트가 업데이트될 때마다 호출
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log("================== 해당 훅은 count의 값이 변경될 때마다 호출");
    console.log(`Current count value: ${count}`);

    // 해당 hook은 의존성 배열의 항목 count의 값이 변경될 때마다 호출
  }, [count]);

  // 📍 추가 예제
  const [keyword, setKeyword] = useState('')
  
  useEffect(() => {
    console.log(">>>>>>>>>>>>>>>>>> 해당 훅은 keyword의 값이 변경될 때마다 호출");
    
    if (keyword.trim() !== '' && keyword.length > 5) console.log('Search keyword is', keyword)

    // keyword 값이 변경될 때마다 호출
  }, [keyword])

  useEffect(() => {
    console.log("++++++++++ 해당 훅은 count 혹은 keyword의 값이 변경될 때마다 호출");
  }, [count, keyword])
  
  return (
    <div style={{ padding: 16 }}>
      <h1>- Custom Hook 예제 -</h1>
      <p>Custom Hook이란?</p>
      <p>- 여러 컴포넌트에서 반복적으로 사용되는 로직을 Hook으로 만들어 재사용하기 위함</p>
      <p>- Custom Hook의 이름은 반드시 'use'로 시작하고 내부에서 다른 Hook을 호출하는 하나의 자바스크립트 함수</p>
      <p>- Custom Hook도 마찬가지로 외부 컴포넌트에서 사용 시 '최상위' 레벨에서만 호출해야함</p>
      <p>- 파라미터의 제약이 없고, 일반 JS의 함수와 같지만 이름을 use로 표현함으로써 Hook이라는 것을 명시</p>
      <p>(쉽게 공통 함수라고 생각하면 됨!)</p>
      
      <hr />
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

      <div>📍 추가 예제)</div>
      <input type="text" placeholder="Search here.." value={keyword} onChange={(e) => setKeyword(e.target.value)} />

    </div>
  );
}

export default Accommodate;
