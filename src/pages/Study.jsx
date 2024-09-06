import React, { useState } from "react";
import Library from "../components/study/chapter_01/Library";
import Clock from "../components/study/chapter_02/Clock";
import CommentList from "../components/study/chapter_03/CommentList";
import NotificationList from "../components/study/chapter_04/NotificationList";
import Hook from "../components/study/chapter_05/Hook";
import Accommodate from "../components/study/chapter_05/Accommodate";
import ToggleClass from "../components/study/chapter_06/ToggleClass";
import ToggleFunction from "../components/study/chapter_06/ToggleFunction";
import LandingPage from "../components/study/chapter_07/LandingPage";

function Study() {
  const chapterList = [
    { name: "chapter_01", value: <Library /> },
    { name: "chapter_03", value: <CommentList /> },
    { name: "chapter_04", value: <NotificationList /> },
    { name: "chapter_05_1", value: <Hook /> },
    { name: "chapter_05_2", value: <Accommodate /> },
    { name: "chapter_06_1", value: <ToggleClass /> },
    { name: "chapter_06_2", value: <ToggleFunction /> },
    { name: "chapter_07", value: <LandingPage /> },
  ];
  const [chapter, setChapter] = useState(0);
  function changeChapter(e) {
    setChapter(e.target.value);
  }

  return (
    <div>
      <Clock />
      <select
        onChange={changeChapter}
        value={chapter}
        style={{ width: 150, height: 40, textAlign: "center", fontSize: 20 }}
      >
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
