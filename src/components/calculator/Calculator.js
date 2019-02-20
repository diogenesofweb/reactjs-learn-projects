import React, { Component } from "react";
import Operations from "./Operations";
import Numbers from "./Numbers";
import "./calc.css";

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "0",
      num1: "0",
      num2: "",
      oper: ""
    };
  }

  handleOpers = e => {
    const oper = e.target.value;

    const addOper = () => {
      this.setState({ oper });
    };

    const runRes = () => {
      this.handleResult();
    };

    this.state.num2 ? runRes() : addOper();
  };

  handleClick = e => {
    const { value } = e.target;

    const addNum = key => {
      // console.log("addNum");
      const regex = /^0(?![.\s])/;
      if (value === "." && /[.]/.test(this.state[key])) return;
      const num = (this.state[key] + value).replace(regex, "");

      this.setState({ [key]: num });
    };

    !this.state.oper ? addNum("num1") : addNum("num2");
  };

  handleClear = () =>
    this.setState({
      result: "0",
      num1: "0",
      num2: "",
      oper: ""
    });

  handleResult = () => {
    // console.log("handleResult")
    const { num1, num2, oper } = this.state;

    const val1 = parseFloat(num1);
    const val2 = parseFloat(num2);

    let result;

    switch (oper) {
      case " / ":
        result = val1 / val2;
        break;
      case " * ":
        result = val1 * val2;
        break;
      case " - ":
        result = val1 - val2;
        break;
      case " + ":
        result = val1 + val2;
        break;
      default:
        console.log("failed handleResult");
    }
    // console.log({result});

    if (result === undefined || isNaN(result)) {
      return this.handleClear();
    }

    const integerOrDecimal2 = Number.isInteger(result)
      ? result
      : result.toFixed(2);

    this.setState({
      result: integerOrDecimal2,
      num1: integerOrDecimal2,
      num2: "",
      oper: ""
    });
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
                <div className="card-title right-align">
                  <span>{this.state.num1}</span>
                  <span>{this.state.oper}</span>
                  <span>{this.state.num2}</span>
                </div>
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
