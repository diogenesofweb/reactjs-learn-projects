import React, { Component } from "react";
import { MyConsomer } from "../MyContext";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [{ id: 1, content: "Написати лист завдань, очевидно ж" }]
    };
  }

  saveToLocalStore = () => {
    const { todos } = this.state;
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  componentWillMount = () => {
    const store = localStorage.getItem("todos");
    store && this.setState({ todos: JSON.parse(store) });
  };

  componentDidMount() {
    window.addEventListener("beforeunload", this.saveToLocalStore);
  }

  componentWillUnmount = () => {
    this.saveToLocalStore();
    window.removeEventListener("beforeunload", this.saveToLocalStore);
  };

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
      <MyConsomer>
        {({ theme }) => (
          <div className="container section">
            <Todos
              theme={theme}
              todos={this.state.todos}
              deleteTodo={this.deleteTodo}
            />
            <AddTodo addTodo={this.addTodo} />
          </div>
        )}
      </MyConsomer>
    );
  }
}

export default Todo;
