// rce
import React, { Component } from "react";
import Operations from "./Operations";
import Numbers from "./Numbers";
import "./calc.css";

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "0",
      input: "0"
    };
  }

  handleOpers = e => {
    const value = e.target.value;
    const inputPrev = this.state.input;
    const check = /\d\s[+-/*]\s\d/;

    const addOper = () => {
      const regex = /\s[+-/*]\s$/;
      const input = regex.test(inputPrev)
        ? inputPrev.replace(regex, value)
        : inputPrev + value;
      this.setState({ input });
    };

    const addRes = () => {
      this.handleResult();
      const func = () => this.setState({ input: this.state.input + value });
      setTimeout(func, 100);
    };

    check.test(inputPrev) ? addRes() : addOper();
  };

  handleClick = e => {
    const { input } = this.state;
    let { value } = e.target;

    const addNum = () => {
      const dotRegex = /[.](?!\d*\s)/g;
      if (value === "." && dotRegex.test(input)) value = "";

      const val = input + value;
      const regex = /^0(?![.\s])|(?<=\s)0\d/g;
      const inputNew = val.replace(regex, "");
      this.setState({ input: inputNew });
    };

    typeof input === "number"
      ? this.setState({ input: value, result: "0" })
      : addNum();
  };

  handleClear = () => this.setState({ result: "0", input: "0" });

  handleResult = () => {
    const regex = /[+-/*]$/;
    const split = this.state.input.toString().split(" ");
    const arr = split.map(e => (regex.test(e) ? e : parseFloat(e)));

    let result;

    switch (arr[1]) {
      case "/":
        result = arr[0] / arr[2];
        break;
      case "*":
        result = arr[0] * arr[2];
        break;
      case "-":
        result = arr[0] - arr[2];
        break;
      case "+":
        result = arr[0] + arr[2];
        break;
      default:
        console.log("failed handleResult");
    }

    if (result === undefined) {
      return this.handleClear();
    }

    const integerOrDecimal2 = Number.isInteger(result)
      ? result
      : result.toFixed(2);

    this.setState({ result: integerOrDecimal2, input: integerOrDecimal2 });
  };

  render() {
    return (
      <div id="calc" className="container section">
        <div className="row">
          <div className="col s12 m10 offset-m1 l8 offset-l2 xl6 offset-xl3">
            <div className="card blue-grey lighten-2">
              <div className="card-content blue-grey darken-2 white-text">
                <span className="card-title right-align">
                  {this.state.result}
                </span>
                <span className="card-title right-align">
                  {this.state.input}
                </span>
              </div>
              <Operations handleOpers={this.handleOpers} />
              <div className="row">
                <Numbers handleClick={this.handleClick} />
                <div className="col s3">
                  <a
                    href="#!"
                    onClick={this.handleClear}
                    className="btn-large btn-flat red-text text-lighten-1 big"
                  >
                    C
                  </a>
                  <div className="valign-wrapper">
                    <a
                      href="#!"
                      onClick={this.handleResult}
                      className="btn-large btn-flat big valign-wrapper"
                    >
                      =
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
