import React, { useState } from "react";
import Child from './Child';
import './parent.css'

function Parent() {
  const [counter, setCounter] = useState(0);

  // Callback function to be passed to the child component
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(counter * 0);
  };

  return (
    <div className="parent">
      <h1>Counter value: {counter}</h1>
      <div>
      <Child onIncrement={handleIncrement} onDecrement={handleDecrement} reset={handleReset}/>
    </div>
    </div>
  );
}

export default Parent;
