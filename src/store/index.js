// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import authReducer from "./auth";

// const counterReducer = (state = initState, action) => {
//   if (action.type === "inc") {
//     return { counter: state.counter + 1, showCounter: state.showCounter };
//   }
//   if (action.type === "incb") {
//     return { ...state, counter: state.counter + action.amt };
//   }
//   if (action.type === "dec") {
//     return { ...state, counter: state.counter - 1 };
//   }

//   if (action.type === "tog") {
//     return { counter: state.counter, showCounter: !state.showCounter };
//   }

//   return state;
// };

// const store = createStore(counterReducer);
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// export { counterAction };
export default store;
