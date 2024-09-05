import React from "react";
// import Book from './Book'

function Library(props) {
  return (
    <div>
      <Book name="클린 코더" numOfPage={276} author={"로버트 마틴"} />
      <hr />
      <Book
        name="모던 자바스크립트 Deep Dive"
        numOfPage={956}
        author={"이웅모"}
      />
      <hr />
      <Book
        name="실용주의 프로그래머"
        numOfPage={496}
        author={"앤드류 헌트, 데이비드 토머스"}
      />
    </div>
  );
}

function Book(props) {
  return (
    <div>
      <h3>{`도서명: ${props.name}`}</h3>
      <h3>{`작가: ${props.name}`}</h3>
      <h3>{`페이지 수: ${props.numOfPage}`}</h3>
    </div>
  );
}

export default Library;
