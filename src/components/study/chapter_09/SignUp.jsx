import React, { useState } from "react";

function SignUp(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("남자");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeGender(e) {
    setGender(e.target.value);
  }

  function handleSubmit(e) {
    alert(`이름: ${name}, 성별: ${gender}`);
    e.preventDefault();
  }

  return (
    <div>
      <h1>Form 예제</h1>
      <form onSubmit={handleSubmit}>
        <label>
          이름:　
          <input type="text" value={name} onChange={handleChangeName} />
        </label>
        <br />
        <label>
          성별:　
          <select value={gender} onChange={handleChangeGender}>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
        </label>
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default SignUp;
