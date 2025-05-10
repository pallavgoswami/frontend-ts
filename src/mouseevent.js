import "./App.css";
import React, { useState } from "react";
function MouseEvent() {
  const [message, setMessage] = useState("");
  const handleClick = () => {
    setMessage("Element Clicked");
  };
  const handledoubleclick = () => {
    setMessage("Element clicked twice");
  };
  const handleMouseDown = () => {
    setMessage("Mouse Button Pressed Down");
  };
  const handleMouseUp = () => {
    setMessage("Mouse Button Pressed Up");
  };
  const handleMouseEnter = () => {
    setMessage("Mouse entered on screen");
  };
  const handleMouseLeave = () => {
    setMessage("Mouse is removed from screen");
  };
  // const handleMouseMove = (e) => {
  //   setMessage(Mouse moved at ${e.clientX},${e.clientY});
  // };
  return (
    <div className="App">
      <div
        style={{ width: "200px", height: "200px", border: "1px solid black" }}
        onClick={handleClick}
        onDoubleClick={handledoubleclick}
        onMouseUp={handleMouseUp}
        onMouseDown={handleMouseDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        // onMouseMove={handleMouseMove}
      >
        Hover and Click
      </div>
      <p>{message}</p>
    </div>
  );
}

export default MouseEvent;