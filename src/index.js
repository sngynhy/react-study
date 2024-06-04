import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom' // 🚕🚗 브라우저 라우터 가져오기
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 📍📍📍 public > index.html의 id='root'인 요소를 가져옴
const root = ReactDOM.createRoot(document.getElementById('root'));
// jsx문법으로 이루어진 App.js를 root div 안에 삽입하여 렌더링
root.render(
  <React.StrictMode>
    {/** 🚕🚗 */}
    <BrowserRouter><App /></BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // 📍 web performance(웹 성능)를 측정하기 위한 리액트 라이브러리
