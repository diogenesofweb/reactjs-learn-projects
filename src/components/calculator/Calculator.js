// rce
import React, { Component } from "react";
import Operations from "./Operations";
import Numbers from "./Numbers";
import "./calc.css";

export class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: "6",
      input: "0"
    };
  }

  handleClick = e => {
    console.log(e.target.value);
    const input = this.state.input + e.target.value;
    const regex = /^0/;
    input.replace(regex, "Q");
    this.setState({ input });
    //console.log(input);
  };

  handleClear = () => this.setState({ result: "0", input: "0" });

  handleResult = () => {
    console.log(this.state.result);
  };

  render() {
    return (
      <div id="calc" className="container section">
        <div className="row">
          <div className="col s12 m8 offset-m2 l6 offset-l3">
            <div className="card blue-grey lighten-2">
              <div className="card-content blue-grey darken-2 white-text">
                <span className="card-title right-align">
                  {this.state.result}
                </span>
                <span className="card-title right-align">
                  {this.state.input}
                </span>
              </div>
              <Operations handleClick={this.handleClick} />
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
