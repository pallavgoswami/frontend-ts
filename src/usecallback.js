import React, { useCallback, useState } from "react";
const Callbackdemo = () => {
  const [count, setCount] = useState(0);
  const handleclick = useCallback(() => {
    console.log("Button clicked");
    setCount(count + 1);
  });
  return (
    <div>
      <p>You clicked button {count} times</p>
      <button onClick={handleclick}>Click Me</button>
    </div>
  );
};
export default Callbackdemo;