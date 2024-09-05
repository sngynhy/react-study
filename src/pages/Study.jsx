import React, { useState } from "react";
import Library from "../components/example/chapter_01/Library";
import Clock from "../components/example/chapter_02/Clock";
import CommentList from "../components/example/chapter_03/CommentList";
import NotificationList from "../components/example/chapter_04/NotificationList";

function Study() {
  const chapterList = [
    { name: "chapter_01", value: <Library /> },
    { name: "chapter_03", value: <CommentList /> },
    { name: "chapter_04", value: <NotificationList /> },
  ];
  const [chapter, setChapter] = useState(0);
  function changeChapter(e) {
    setChapter(e.target.value);
  }

  return (
    <div>
      <Clock />
      <select onChange={changeChapter} value={chapter}>
        {chapterList.map((el, i) => (
          <option key={i} value={i}>
            {el.name}
          </option>
        ))}
      </select>

      <div>{chapterList[chapter].value}</div>
    </div>
  );
}

export default Study;
