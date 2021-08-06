import React from "react";
import { useSelector, useDispatch } from "react-redux";

const CounterContainer = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+ 1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>- 1</button>
      <button onClick={() => dispatch({ type: "INCREMENT10", payload: 10 })}>
        + 10
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT10", payload: 10 })}>
        - 10
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>
    </div>
  );
};

export default CounterContainer;
