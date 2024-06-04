import React, { useState } from 'react'

function State () {
    // 로컬 동적 변수 state로 관리
    const [cnt, setCount] = useState(0)
    const calc = (param, e) => {
        setCount(param === '+' ? cnt + 1 : cnt - 1)
    }

    const [inputTxt, setInputValue] = useState("입력 테스트")
    function setInputText (param, e) {
        setInputValue(e.target.value)
        console.log(param)
    }

    // 객체 타입 상태 관리
    const [userInfo, setUserInfoValue] = useState({
        name: '',
        age: 0,
        email: ''
    })
    function setInputUserInfo (key, e) {
        console.log('setInputsValue', key, e.target.value)
        setUserInfoValue({
            ...userInfo, // 객체 state를 깊은 복사 후
            [key]: e.target.value // 해당 키 값을 새로운 값으로 업데이트
        })
    }
    
    return (
        <div>
            <h1>🖥 State 적용하기 🖥</h1>
            <button onClick={e => calc('+')} style={{marginRight: '5px'}}>+</button>
            <button onClick={e => calc('-')}>-</button>
            <p>{ cnt }</p>

            <hr/>

            <input type="text" value={inputTxt} onChange={e => setInputText('파라미터', e)}></input>
            <p>입력값 텍스트 : {inputTxt}</p>

            <hr/>

            <p>이름 : {userInfo.name} </p>
            <input type="text" value={userInfo.name} onChange={e => setInputUserInfo('name', e)}></input>
            <p>나이 : {userInfo.age} </p>
            <input type="text" value={userInfo.age} onChange={e => setInputUserInfo('age', e)}></input>
            <p>이메일 : {userInfo.email} </p>
            <input type="text" value={userInfo.email} onChange={e => setInputUserInfo('email', e)}></input>

        </div>
    )
}

export default State