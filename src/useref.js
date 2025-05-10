import React, { useState, useRef, useEffect } from "react";

function Refdemo() {
  const [inputvalue, setInputValue] = useState("");
  const count = useRef(0);
  useEffect(() => {
    count.current = count.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        value={inputvalue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <h1>{count.current}</h1>
    </div>
  );
}
export default Refdemo;