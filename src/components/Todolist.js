import React from "react";
// Import Components
import Todo from "./Todo";

const Todolist = ({ todos, setTodos, filteredTodos }) => {
  console.log(todos);
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo
            todos={todos}
            todo={todo}
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            // id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
