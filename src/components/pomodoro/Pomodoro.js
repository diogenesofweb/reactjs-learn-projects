import React, { Component } from "react";
import { MyConsomer } from "../MyContext";
import Length from "./Length";
import Session from "./Session";
import "./Pomodoro.css";

export default class Pomodoro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Break: 5,
      Session: 25,
      current: "Press Play When You're Ready", // vs "Session" vs "Break"
      display: null,
      running: false,
      interval: 0,
      seconds: 0
    };
    this.url = "https://goo.gl/65cBl1";
    this.audio = new Audio(this.url);
  }

  handleLenghtClick = (oper, comp) => {
    // oper: operation plus or minus;  comp: component Break or Session
    // console.log({ oper, comp });
    let val = this.state[comp];
    // console.log({ [comp]: val });
    return oper === "add"
      ? this.setState({ [comp]: val <= 59 ? ++val : 60 })
      : this.setState({ [comp]: val >= 1 ? --val : 0 });
  };

  handlePlay = () => {
    // console.log("handlePlay");
    const { running, interval } = this.state;

    const tick = () => {
      // console.log("tick");
      const { seconds, display, current } = this.state;

      const boom = () => {
        // console.log("boom");
        const { Break, Session } = this.state;

        this.audio.play();
        this.setState({
          current: current === "Break" ? "Session" : "Break",
          display: current === "Break" ? Session : Break
        });
      };

      seconds === 0
        ? display === 0
          ? boom()
          : this.setState({ seconds: 59, display: display - 1 })
        : this.setState({ seconds: seconds - 1 });
    };

    const play = () => {
      // console.log("play");
      const { display, Session } = this.state;

      const start = () => {
        // console.log("on start");

        this.setState({
          current: "Session",
          display: display ? display : Session,
          running: true,
          interval: setInterval(tick, 1000)
        });
      };

      const playAfterPause = () => {
        // console.log("playAfterPause");
        this.setState({ running: true, interval: setInterval(tick, 1000) });
      };

      display ? playAfterPause() : start();
    };

    const pause = () => {
      // console.log("pause");
      clearInterval(interval);
      this.setState({ interval: 0, running: false });
    };

    return running ? pause() : play();
  };

  handleReset = () => {
    // console.log("handleReset");
    const { interval } = this.state;

    interval && clearInterval(interval);
    this.setState({
      current: "Press Play",
      display: null,
      running: false,
      seconds: 0,
      interval: 0
    });
  };

  componentWillUnmount() {
    // console.log("componentWillUnmount");
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <MyConsomer>
        {({ theme, lang }) => {
          const textColor =
            theme === "green"
              ? "green-text text-darken-4"
              : "red-text text-accent-2";

          const title = lang === "ua" ? "Помідор" : "Pomodoro Clock";

          return (
            <div id="clock" className={`container center ${textColor}`}>
              <h1>{title}</h1>
              <div className="row">
                <Length
                  compName="Break"
                  length={this.state.Break}
                  handleClick={this.handleLenghtClick}
                />
                <div className="col l2 hide-on-med-and-down">
                  <i className="medium material-icons">alarm_on</i>
                </div>
                <Length
                  compName="Session"
                  length={this.state.Session}
                  handleClick={this.handleLenghtClick}
                />
              </div>
              <Session
                current={this.state.current}
                display={this.state.display}
                seconds={this.state.seconds}
                running={this.state.running}
                handlePlay={this.handlePlay}
                handleReset={this.handleReset}
              />
            </div>
          );
        }}
      </MyConsomer>
    );
  }
}
