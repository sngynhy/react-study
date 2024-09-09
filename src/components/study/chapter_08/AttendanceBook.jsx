import React from "react";

const students = [
  { id: 1, name: "Kim" },
  { id: 2, name: "Park" },
  { id: 3, name: "Lee" },
  { id: 4, name: "Choi" },
];

function AttendanceBook(props) {
  return (
    <ul style={{ listStyle: "none" }}>
      <li>
        <h1>List & map() 예제</h1>
      </li>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}

export default AttendanceBook;
