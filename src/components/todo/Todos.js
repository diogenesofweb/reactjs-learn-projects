// rafc
import React from "react";

const Todos = props => {
  const { todos, deleteTodo } = props;
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <li className="collection-item blue-grey darken-2" key={todo.id}>
          <span>{todo.content}</span>
          <a
            href="#!"
            className="secondary-content"
            onClick={() => deleteTodo(todo.id)}
          >
            <i className="material-icons red-text text-lighten-1">delete</i>
          </a>
        </li>
      );
    })
  ) : (
    <li className="collection-item blue-grey darken-2">
      <span>No todo's !!!</span>
    </li>
  );

  return (
    <ul className="collection blue-grey darken-4">
      <li className="collection-header">
        <h5 className="center">List of Todo's</h5>
      </li>
      {todoList}
    </ul>
  );
};

export default Todos;
