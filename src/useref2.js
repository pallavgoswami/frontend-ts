import React, { useRef } from "react";
const Refdemo2 = () => {
  const inputref = useRef(null);
  const handlefocus = () => {
    if (inputref.current) {
      inputref.current.focus();
    }
  };
  return (
    <div>
      <input ref={inputref} type="text" placeholder="click the button focus me"></input>
      <button onClick={handlefocus}>Focus the input</button>
    </div>
  );
};
export default Refdemo2;
