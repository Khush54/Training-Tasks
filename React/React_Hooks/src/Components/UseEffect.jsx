import React, { useState, useEffect } from "react";

function Counter() {
  const [increaseCount, setIncreaseCount] = useState(0);
  const [decreaseCount, setDecreaseCount] = useState(0);

  console.log("Component Rendered");

  // This runs ONLY when increaseCount changes
  useEffect(() => {
    console.log("useEffect triggered due to increaseCount change");
  }, [increaseCount]);

  return (
    <div>
      <h2>Increase Count: {increaseCount}</h2>
      <h2>Decrease Count: {decreaseCount}</h2>

      <button onClick={() => setIncreaseCount(increaseCount + 1)}>
        Increase
      </button>

      <button onClick={() => setDecreaseCount(decreaseCount - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;