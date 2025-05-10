import React, { useState } from 'react';

function BackgroundColorChanger() {
  const [color, setColor] = useState('white');

  return (
    <div>
      <select value={color} onChange={(e) => setColor(e.target.value)}>
        <option value="white">White</option>
        <option value="skyblue">Sky Blue</option>
        <option value="lightgreen">Light Green</option>
        <option value="lightcoral">Light Coral</option>
      </select>
      <div style={{
        backgroundColor: color,
        padding: '20px',
        marginTop: '20px',
        border: '1px solid #aaa'
      }}>
        Background color is: {color}
      </div>
    </div>
  );
}

export default BackgroundColorChanger;
