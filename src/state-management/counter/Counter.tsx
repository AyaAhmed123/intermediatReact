import { useReducer, useState } from "react";
import useStoreCounter from "./store";

const Counter = () => {
  const { counter, increment, reset } = useStoreCounter();
  return (
    <div>
      Counter ({counter})
      <button onClick={() => increment()} className="btn btn-primary mx-1">
        Increment
      </button>
      <button onClick={() => reset()} className="btn btn-primary mx-1">
        Reset
      </button>
    </div>
  );
};

export default Counter;
