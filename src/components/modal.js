import { useState } from 'react';

// 컴포넌트 생성
function Modal (props) {
    console.log(props.menu)
    return (
        <> {/** 최상단 태그를 <div></div> 대신 <></>로 대체 가능 */}
            <div className="modal">
                <h2>곱창</h2>
                <img src="img/samgyeopsal.jpg" alt="곱창"></img>
            </div>
        </>
    )
}
export default Modal