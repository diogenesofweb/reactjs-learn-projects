// rafc
import React from "react";

const Todos = props => {
  const { todos, deleteTodo } = props;
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <li className="collection-item black-text grey" key={todo.id}>
          <span>{todo.content}</span>
          <a
            href="#!"
            className="secondary-content"
            onClick={() => deleteTodo(todo.id)}
          >
            <i className="material-icons red-text text-darken-3">delete</i>
          </a>
        </li>
      );
    })
  ) : (
    <li className="collection-item black-text grey">
      <span>No todo's !!!</span>
    </li>
  );

  return (
    <ul className="collection grey darken-3">
      <li className="collection-header">
        <h5 className="center">List of Todo's</h5>
      </li>
      {todoList}
    </ul>
  );
};

export default Todos;
