import useStoreCounter from "./store";
import { mountStoreDevtool } from "simple-zustand-devtools";
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
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useStoreCounter);
}
export default Counter;
