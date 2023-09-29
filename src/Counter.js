import { useState } from "react";

const Counter = (props) => {
  // Define a state variable for the count and initialize it to 0
  const [count, setCount] = useState(0);

  // Define a function to increment the count by 1
  function increment() {
    // Update the count by passing a new value
    setCount(count + 1);
  }

  // Define a function to decrement the count by 1
  function decrement() {
    // Update the count by passing a function that returns a new value
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <p>The count is: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
