import React, { useState } from "react";

export default function SimpleCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("+");
  const [result, setResult] = useState(null);

  const Calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult("Invalid input");
      return;
    }

    let res = 0;
    switch (operator) {
      case "+":
        res = a + b;
        break;
      case "-":
        res = a - b;
        break;
      case "/":
        res = b !== 0 ? a / b : "cannot be divided by zero";
        break;
      case "*":
        res = a * b;
        break;
      default:
        res = "Unknown operation";
    }
    setResult(res);
  };

  return (
    <div>
      <h3>Simple Calculator</h3>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} placeholder="Enter first number" />
      <select value={operator} onChange={(e) => setOperator(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="/">/</option>
        <option value="*">*</option>
      </select>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} placeholder="Enter second number" />
      <button onClick={Calculate}>Calculate</button>
      {result !== null && <h4>Result: {result}</h4>}
    </div>
  );
}
