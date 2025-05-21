import React, { useState } from "react";

export default function CycleColors() {
  const colors = ["red", "green", "blue", "purple", "orange"];
  const [index, setIndex] = useState(0);

  const changeColor = () => {
    setIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return <div onClick={changeColor} style={{backgroundColor: colors[index]}}>Click me to change color</div>;
}
