import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incr_by_amount } from "./Redux/actions";

function Redux() {
  const count = useSelector((state) => state.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(incr_by_amount(5))}>+5</button>
    </div>
  );
}

export default Redux;