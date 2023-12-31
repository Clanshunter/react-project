import React from "react";
import ReactDOM from "react-dom";

var interval;
class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleTimeString(),
    };
  }

  componentDidMount() {
    interval = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return <h2 className="timer">it is {this.state.time}</h2>;
  }
}

export default Timer;
