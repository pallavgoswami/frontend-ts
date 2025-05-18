import React, { useState } from "react";

export default function ToDoTask() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
        <input value = {input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        <ul>
            {todos.map((todo, i) => (
                <li key={i}>
                    {todo} <button onClick={() => removeTodo(i)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
  )
}
