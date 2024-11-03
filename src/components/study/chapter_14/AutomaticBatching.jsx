// Automatic Batching
// (기존의 리액트 컴포넌트는 상태가 업데이트될 때마다 재랜더링되기 때문에 함수 컴포넌트에서 '각각의 state'가 업데이트될 때마다 재랜더링이 발생
// 즉, useState 훅을 사용해서 선언한 각 state의 set 함수를 거의 동시에 호출하더라도 호출된 횟수만큼 재랜더링이 발생)
// 이러한 문제를 해결하기 위해
// 여러 상태의 업데이트가 동시에 발생하게 되면 이 작업들을 '묶어서 한 번에 처리'하는 것
import React, { useState } from 'react'

function AutomaticBatchingExample(props) {
    const [count, setCount] = useState(0)
    const [isFull, setIsFull] = useState(0)

    setTimeout(() => {
        setCount(count => count + 1)
        setIsFull(isFull => !isFull)
        // 기존 버전에서는 각 state가 업데이트될 때마다 재랜더링이 발생하여 총 2번 재랜더링 되었지만
        // 버전 18은 마지막에 한 번만 재랜더링 됨 (Automatic Batching)
    }, 1000)

    return (
        <div></div>
    )
}

export default AutomaticBatchingExample