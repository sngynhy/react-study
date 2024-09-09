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
import AttendanceBook from "../components/study/chapter_08/AttendanceBook";
import SignUp from "../components/study/chapter_09/SignUp";
import Calculator from "../components/study/chapter_10/Calculator";
import ProfileCard from "../components/study/chapter_11/ProfileCard";
import ContextExample from "../components/study/chapter_12/ContextExample";
import DarkOrLight from "../components/study/chapter_12/DarkOrLight";

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
    { name: "chapter_08", value: <AttendanceBook /> },
    { name: "chapter_09", value: <SignUp /> },
    { name: "chapter_10", value: <Calculator /> },
    { name: "chapter_11", value: <ProfileCard /> },
    { name: "chapter_12_1", value: <ContextExample /> },
    { name: "chapter_12_2", value: <DarkOrLight /> },
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
