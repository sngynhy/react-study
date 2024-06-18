import React from 'react'
// import Book from './Book'

function Library (props) {
    return (
        <div>
            <Book name="리액트 바이블" numOfPage={300} />
            <Book name="리액트 기초" numOfPage={150} />
            <Book name="고양이는 귀여워" numOfPage={210} />
        </div>
    )
}

function Book (props) {
    console.log('Book', props)
    return (
        <div>
            <h1>{`이 책의 이름은 "${props.name}"입니다.`}</h1>
            <h2>{`이 책은 총 ${props.numOfPage}페이지로 이루어져 있습니다.`}</h2>
        </div>
    )
}


export default Library