import React from 'react';
import './child.css'
function Child(props) {
  
  return (
    <div className='child'>
      <button onClick={props.onIncrement}>Increment Counter</button>
      <button onClick={props.onDecrement}>Decrement Counter</button>
      <button onClick={props.reset}>Reset Counter</button>
    </div>
  );
}

export default Child;
