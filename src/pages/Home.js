import React, { useState } from 'react'
import Clock from '../components/example/Clock'
import Lifecycle from '../components/example/LifeCycle'

// 컴포넌트명은 무조건 대문자로!
// 과제) setInterval을 이용해서 1초 주기로 현재 시각 업데이트 로직 구현하기!
const Home = () => {
    let [color, setColor] = useState('green')
    return (
        <div>
            <h1>🎈 Home Page 🎈</h1>
            <Clock />
            {/* <Lifecycle color={color} /> */}
        </div>
    )
}

export default Home