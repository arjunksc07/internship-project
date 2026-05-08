import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Count: {count}</h2>

    
        <button onClick={decrease} disabled={count === 0}>
          Decrease
        </button>

        <button onClick={increase} disabled={count === 10}>
          Increase
        </button>

       
    </div>
  );
}

export default Counter;