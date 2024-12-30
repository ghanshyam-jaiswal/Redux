import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Count = () => {
  // Access state using useSelector
  const counter = useSelector((state) => state.counter);

  // Dispatch actions using useDispatch
  const dispatch = useDispatch();

  return (
    <div>
      {/* <h1>Counter: {counter}</h1> */}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'MULTIPLY' })}>Multiply</button>
      <button onClick={() => dispatch({ type: 'DIVIDE' })}>Divide</button>
    </div>
  );
};

export default Count;
