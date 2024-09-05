import React from "react";

class Clock extends React.Component {
  // this.state를 지정하는 class constructor
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    return (
      <div>
        <h1>안녕, 리액트!</h1>
        {/* props 사용 시 this.props */}
        <h2>⏰ 현재 시각: {this.state.date.toLocaleTimeString()} ⏰</h2>
      </div>
    );
  }
}

export default Clock;
