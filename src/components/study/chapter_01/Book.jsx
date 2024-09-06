import React from "react";

function Book(props) {
  return (
    <div>
      <h3>{`도서명: ${props.name}`}</h3>
      <h3>{`작가: ${props.name}`}</h3>
      <h3>{`페이지 수: ${props.numbOfPage}`}</h3>
    </div>
  );
}

export default Book;
