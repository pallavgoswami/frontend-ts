import React, { useState, useMemo } from "react";
const Mem1 = ({ num }) => {
  const calculateFactorial = (n) => {
    console.log("Calculating Factorial...");
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  const factorial = useMemo(() => calculateFactorial(num), [num]);

  return (
    <div>
      <h2>
        Factorial of {num} : {factorial}
      </h2>
    </div>
  );
};

const Mem = () => {
  const [num, setNum] = useState(5);

  return (
    <div>
      <button onClick={() => setNum(num + 1)}>Increment Number (Factorial)</button>
      <Mem1 num = {num}/>
    </div>
  );
};

export default Mem;
