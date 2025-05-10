import { createStore } from "redux";
import valueReducer from "./reducer";
export const store = createStore(valueReducer);