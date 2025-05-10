import React, { useRef, useState } from "react";
const Refdemo1 = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);
  const increment = () => {
    previousCount.current = count;
    setCount(count + 1);
  };
  return (
    <div>
      <p>Current Value of Count:{count}</p>
      <p>Previous Count Vale:{previousCount.current}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
export default Refdemo1;