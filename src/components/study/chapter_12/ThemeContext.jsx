import React from "react";

const ThemeContext = React.createContext(); // 초기값 설정 X
ThemeContext.displayName = "ThemeContext"; // 개발자 도구에서 해당 이름으로 명시됨 (hooks에서 확인 가능)

export default ThemeContext;
