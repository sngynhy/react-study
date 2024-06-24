import React, { useState } from 'react'

class Lifecycle extends React.Component {
    // 1. 마운트(Mounting)
    constructor (props) {
        console.log('constructor', props)
        // 컴포넌트 생성자 메서드 > 컴포넌트 생성 시 제일 먼저 호출
        // this.props, this.state 접근 가능, 리액트 요소 반환
        super(props)
        this.state = { color: props.color }
    }
    static getDerivedStateFromProps (props, state) {
        console.log('getDerivedStateFromProps', props, state)
        // DOM에서 요소를 렌더링하기 직전 호출되는 메서드
        // props로부터 파생된 state를 가져옴
        // 즉, props로 받아온 값을 state에 할당
        return { color: props.color }
    }
    render () {
        console.log('render')
        // 컴포넌트 렌더링 메서드 > HTML을 DOM에 출력
        return (
            <h1>Selected Color is <div style={{backgroundColor: this.state.color, width: '40px', height: '25px', display: 'inline-block'}}></div></h1>
        )
    }
    componentDidMount () {
        console.log('componentDidMount')
        // 컴포넌트 렌더링 후 호출되는 메서드
        // 주로 DOM을 사용해야 하는 외부 라이브러리 연동, api 호출 등을 수행
        // setTimeout(() => {
        //     this.setState({ color: "yellow" })
        // }, 1000)
    }

    // 2. 업데이트(Updating)
    // getDerivedStateFromProps () {
        // 컴포넌트의 구성 요소 업데이트 시 가장 먼저 호출되는 메서드
        // state 값 설정
    // }
    shouldComponentUpdate () {
        console.log('shouldComponentUpdate')
        // 컴포넌트 리렌더링 여부 지정 > (default: true)
        return true
    }
    // render () {
        // 업데이트하여 리렌더링
    // }
    getSnapshotBeforeUpdate (prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate')
        // 업데이트 전에 props, state에 접근 가능
        // 업데이트 후 이전의 값이 무엇이었는지 확인
        // 해당 메서드가 있는 경우 반드시 componentDidUpdate() 메서드도 있어야 함!
        console.log('업데이트 전', prevProps, prevState)
        console.log('업데이트 후', this.props, this.state)
        return null
    }
    componentDidUpdate () {
        console.log('componentDidUpdate')
        // 컴포넌트가 DOM에 업데이트 완료된 후 호출
    }

    // 3. 언마운트(Unmounting)
    componentWillUnmount () {
        console.log('componentWillUnmount 컴포넌트 제거!')
        // 컴포넌트가 DOM에서 제거될 시 호출
        // alert('컴포넌트 제거!')
    }
}

export default Lifecycle