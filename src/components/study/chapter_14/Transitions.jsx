// Transitions
// 긴급한 업데이트와 긴급하지 않은 업데이트를 구분하여 처리하기 위한 개념

// 업데이트 종류
// - 긴급한 업데이트
//     : 사용자와 직접적인 인터랙션이 일어나는 경우 (ex. 글자 입력, 버튼 클릭 등)
// - 긴급하지 않은 업데이트
//     : 사용자와 직접적인 인터랙션이 일어나지 않는 경우 (ex. 서버로부터 데이터를 받아와 출력하는 경우)

import React, { startTransition } from 'react'

function Transitions(props) {
    // 긴급 업데이트: 입력한 글자를 화면에 실시간으로 출력
    setInputValue(input)

    // 함수 내에 있는 모든 업데이트는 Transition 업데이트가 됨
    startTransition(() => {
        // Transition 업데이트: 검색 결과 출력
        setSerchQuery(input)
    })

    return (
        <div></div>
    )
}

export default Transitions