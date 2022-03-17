import React, { Component } from "react";

import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      actualTime: 0,
      btnPlayPause: "Começa"
    };

    this.counter = null;
    this.initTimer = this.initTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
  }

  initTimer() {
    if (this.counter) {
      this.pauseTimer();
      this.setState({ btnPlayPause: "Começa" });
    } else {
      this.counter = setInterval(() => {
        this.setState({ actualTime: this.state.actualTime + 0.1 });
      }, 100);
      this.setState({ btnPlayPause: "Pausar" });
    }
  }

  pauseTimer() {
    clearInterval(this.counter);
    this.counter = null;
  }

  clearTimer() {
    this.setState({ actualTime: 0 });
    clearInterval(this.counter);
    this.counter = null;
    this.setState({ btnPlayPause: "Começa" });
  }

  render() {
    return (
      <div className="timer">
        <div className="time">
          <h2>{this.state.actualTime.toFixed(2)}</h2>
        </div>
        <div className="btns">
          <input
            type="button"
            value={this.state.btnPlayPause}
            onClick={this.initTimer}
          />
          <input type="button" value="Limpar" onClick={this.clearTimer} />
        </div>
      </div>
    );
  }
}

export default Timer;
