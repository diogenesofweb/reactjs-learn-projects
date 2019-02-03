// rafc
import React from "react";

const Todos = props => {
  // console.log({ props });
  const { todos, deleteTodo, theme } = props;
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <li className={`collection-item ${theme} lighten-1`} key={todo.id}>
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
    <li className={`collection-item ${theme} lighten-1`}>
      <span>No todo's !!!</span>
    </li>
  );

  return (
    <ul className={`collection ${theme} darken-4`}>
      <li className="collection-header">
        <h5 className="center white-text">List of Todo's</h5>
      </li>
      {todoList}
    </ul>
  );
};

export default Todos;
