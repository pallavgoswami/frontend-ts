import React, { useState } from "react";
function ToggleText() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>{isVisible ? "Hide" : "Show"} Text</button> {/*conditional rendering */}
      {isVisible && <p>This is the toggled text!</p>}
    </div>
  );
}

export default ToggleText;
