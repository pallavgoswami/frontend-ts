import "./App.css";
import React, { useState } from "react";
function OnClick() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <p>{count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}

export default OnClick;