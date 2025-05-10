import "./App.css";
import React, { useState } from "react";
function OnSubmit() {
  const [inputValue, setInputValue] = useState("");
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", inputValue);
  };
  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="App">
      <form onSubmit={handlesubmit}>
        <label>Input:</label>
        <input type="text" value={inputValue} onChange={handleChangeInput} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default OnSubmit;