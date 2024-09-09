import React from "react";

// React.createContext를 이용하여 현재 테마를 위한 context를 생성하며, 기본값은 'grey'로 설정
const ColorContext = React.createContext("grey");

// context를 사용할 상위 컴포넌트에서 Provider로 감싸주어야 함
// Provider를 사용하여 하위 컴포넌들에게 현재 테마 데이터를 전달
// Provider의 모든 하위 컴포넌트들은 컴포넌트 트리 하단에 얼마나 깊이 있는지에 관계없이 데이터를 읽을 수 있음
// 현재 테마값으로 'dark'를 전달
function ContextExample(props) {
  return (
    <ColorContext.Provider value="yellow">
      <Toolbar />
    </ColorContext.Provider>
  );
}

// 중간에 위치한 컴포넌트는 테마 데이터를 하위 컴포넌트에 전달할 필요가 없음
function Toolbar(props) {
  return (
    <div>
      <ColorButton />
    </div>
  );
}

function ColorButton(props) {
  // Consumer를 사용하여 가장 가까운 상위 테마 Provider를 찾아 해당되는 값(value)을 사용
  // 만약 해당되는 Provider가 없을 경우 context의 기본값을 사용
  // 현재는 상위 Provider가 존재하므로 현재 테마의 값은 'lightgreen'
  return (
    <ColorContext.Consumer>
      {(value) => <Button color={value} />}
    </ColorContext.Consumer>
  );
}

function Button(props) {
  const color = props.color;
  return <button style={{ background: color }}>컨텍스트</button>;
}

export default ContextExample;
