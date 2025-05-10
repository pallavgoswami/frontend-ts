import { INCREMENT, DECREMENT, INCR_BY_AMOUNT } from "./actions";
const intialstate = {
  value: 0,
};
const valueReducer = (state = intialstate, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case INCR_BY_AMOUNT:
      return { ...state, value: state.value + action.payload };
    default:
      return state;
  }
};
export default valueReducer;