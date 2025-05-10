import React, { useState } from "react";
export default function ControlledForm() {
  const [inputvalue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted with Input", inputvalue);
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>Enter Text:</label>
        <input
          type="text"
          value={inputvalue}
          onChange={handleInputChange}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}