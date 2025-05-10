import React from "react";
import TodoItem from "./todoitem";

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <div>
      {todos.length === 0 ? (
        <p>No todos yet!</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;