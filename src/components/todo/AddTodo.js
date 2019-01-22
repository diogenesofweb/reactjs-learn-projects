// rce
import React, { Component } from "react";

export class AddTodo extends Component {
  // rconst
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }
  handleChange = e => {
    this.setState({ content: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({ content: "" });
  };

  render() {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s8 offset-s2">
              <i className="material-icons prefix">mode_edit</i>
              <input
                id="icon_prefix2"
                className="white-text"
                onChange={this.handleChange}
                value={this.state.content}
              />
              <label className="active" htmlFor="icon_prefix2">
                New Todo:
              </label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default AddTodo;
