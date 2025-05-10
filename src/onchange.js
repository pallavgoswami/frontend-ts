import "./App.css";
import React, { useState } from "react";
function OnChange() {
  const [name, setName] = useState("");
  const handleOnChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={name}
        placeholder="Enter name"
        onChange={handleOnChange}
      />
      <p>{name}</p>
    </div>
  );
}

export default OnChange;