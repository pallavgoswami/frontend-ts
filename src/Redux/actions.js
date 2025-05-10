export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const INCR_BY_AMOUNT = "INCREMENT_BY_AMOUNT";
export const increment = () => ({ type: "INCREMENT" });
export const decrement = () => ({ type: "DECREMENT" });
export const incr_by_amount = (amount) => ({
  type: "INCREMENT_BY_AMOUNT",
  payload: amount,
});