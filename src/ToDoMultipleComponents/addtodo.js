import React, { useState } from "react";

function AddTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddClick = () => {
    if (newTodo.trim() !== "") {
      addTodo({
        id: Date.now(),
        text: newTodo,
        completed: false,
      });
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add a new todo"
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default AddTodo;