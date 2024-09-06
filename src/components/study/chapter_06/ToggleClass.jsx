import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    /*
     '클래스' 컴포넌트는 callback에서 `this`를 사용하기 위해서는 '바인딩'을 필수적으로 해줘야함.
     ∵ 자바스크립에서는 기본적으로 클래스 함수가 바인드되지 않기 때문!
       바인딩을 하지 않으면, this.handleClick은 Global Scope에서 호출되는데
       Global Scope에서 this.handleClick은 undefined이므로 사용 불가능
      (JS 함수 작동 원리에 의해서 함수명 뒤에 괄호 없이 사용하기 위해서는 무조건 해당 함수를 바인드 해줘야함)
     ※ 참고) https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
    */
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({ isToggleOn: !prevState.isToggleOn }));
  }

  render() {
    return (
      <div>
        <h1>- Handling Events by Class Component -</h1>
        <h3>
          클래스 컴포넌트는 callback에서 `this`를 사용하기 위해서는 '바인딩'을
          필수적으로 해줘야 한다는 것!
        </h3>
        <button
          onClick={this.handleClick}
          style={{
            backgroundColor: this.state.isToggleOn ? "yellow" : "lightgrey",
          }}
        >
          {this.state.isToggleOn ? "켜짐" : "꺼짐"}
        </button>
      </div>
    );
  }
}

export default Toggle;
