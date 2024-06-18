import React, { useState } from 'react'

function UserList () {
    const users = [
        { username: 'user1', name: '홍길동', email: 'hong@abc.d' },
        { username: 'user2', name: '아무개', email: 'ahahah@abc.d' },
        { username: 'user3', name: '이무기', email: 'leemugi@abc.d' },
        { username: 'user4', name: '김철수', email: 'kimchs@abc.d' }
    ]

    return (
        <table>
            <thead>
                <tr>
                    <th>아이디</th>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {/* 자식 컴포넌트에 data 전달하기 (userData라는 프로퍼티명으로 user data 전달) */}
                { users.map(user => <UserComponent1 username={user.username} name={user.name} email={user.email} />)}
                <hr/>
                { users.map(user => <UserComponent2 userData={user} />)}
            </tbody>
        </table>
    )
}

// 외부 컴포넌트 선언 (부모로부터 전달받은 데이터를 매개변수로 받음!)
function UserComponent1 (props) {
    console.log('UserComponent1', props)
    return (
        <tr>
            <td>{ props.username }</td>
            <td>{ props.name }</td>
            <td>{ props.email }</td>
        </tr>
    )
}

function UserComponent2 ({ userData }) {
    console.log('UserComponent2', userData)
    return (
        <tr>
            <td>{ userData.username }</td>
            <td>{ userData.name }</td>
            <td>{ userData.email }</td>
        </tr>
    )
}

export default UserList