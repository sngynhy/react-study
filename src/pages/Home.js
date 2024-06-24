import React, { useState } from 'react'
import Clock from '../components/example/Clock'
import Lifecycle from '../components/example/LifeCycle'

// 컴포넌트명은 무조건 대문자로!
// 과제) setInterval을 이용해서 1초 주기로 현재 시각 업데이트 로직 구현하기!
const Home = () => {
    let [colorIndex, setColorIndex] = useState(1)
    const colorList = ['red', 'yellow', 'green', 'blue', 'white', 'black']
    function changeColor (e) {
        setColorIndex(e.target.value)
    }

    const [isActive, setIsActive] = useState(false);
    function handleButtonClick () {
        setIsActive(!isActive)
    }
    function lifeCycleTestComponent () {
        return (<div>
            <select onChange={changeColor} value={colorIndex}>
                { colorList.map((color, i) => (<option key={i} value={i}>{color}</option>)) }
            </select><Lifecycle color={colorList[colorIndex]} />
        </div>)
    }
    return (
        <div>
            <h1>🎈 Home Page 🎈</h1>
            <Clock />

            {/* <button onClick={() => {setIsActive(!isActive)}}> */}
            <button onClick={handleButtonClick}>
                {isActive ? 'Deactivate LifeCycle Component' : 'Activate LifeCycle Component'}
            </button>
            {isActive && lifeCycleTestComponent()}
        </div>
    )
}

export default Home