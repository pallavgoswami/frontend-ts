import "./App.css";
import React, { useState } from "react";
function KeyboardEvent() {
  const [key, setKey] = useState("");
  const handleKeyDown = (e) => {
    setKey(e.key);
    alert(`Key Pressed: ${e.key}`);
  };
  return (
    <div className="App">
      <input type="text" onKeyDown={handleKeyDown}></input>
      <p>{key}</p>
    </div>
  );
}

export default KeyboardEvent;