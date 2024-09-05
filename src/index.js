import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // 🚕🚗 브라우저 라우터 가져오기
import "./assets/css/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// 📍📍📍 public > index.html의 id='root'인 요소를 가져옴
const root = ReactDOM.createRoot(document.getElementById("root"));
// jsx문법으로 이루어진 App.js를 root div 안에 삽입하여 렌더링
root.render(
  <React.StrictMode>
    {/** 🚕🚗 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/* 
<StrictMode>
렌더링이 두번 발생 (개발 모드에서만 활성화)
- 잠재적인 문제 감지
  - 안전하지 않은 수명 주기를 가진 구성 요소 식별
  - 레거시 문자열 참조 API 사용에 대한 경고
  - 더 이상 사용되지 않는 findDOMNode 사용에 대한 경고
  - 예상치 못한 부작용 감지
  - 레거시 컨텍스트 API 감지
  - 재사용 가능한 상태 보장

React는 사용자의 상호작용이 일어나지 않으면 렌더링 단계에서 어떠한 결과도 변경되지 않는다.
따라서 StrictMode는 초기 렌더링이 끝난 후 함수를 한번 더 호출하여
결과값에 변화가 있는지 확인하고, 그 변화로 오류를 감지한다.

📍참고) https://legacy.reactjs.org/docs/strict-mode.html
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // 📍 web performance(웹 성능)를 측정하기 위한 리액트 라이브러리
