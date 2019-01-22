import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import Rainbow from "/home/diogenes/Code/React/Learn/ninja/src/hoc/Rainbow";

class Todo extends Component {
  // rconst
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ id: 1, content: "Обдумати цілі / завдання на день" }]
    };
  }
  deleteTodo = id => {
    const todos = this.state.todos.filter(e => e.id !== id);
    this.setState({ todos });
  };
  addTodo = todo => {
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({ todos });
  };
  render() {
    return (
      <div className="container">
        <h3 className="center section">Todo's App</h3>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default Rainbow(Todo);
