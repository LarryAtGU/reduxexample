import { useReducer } from "react";

const initVal = {
  value: "",
  isTauched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTauched: state.isTauched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTauched: true };
  }
  if (action.type === "RESET") return initVal;
  return initVal;
};

const useInput = (validFun) => {
  const [inputState, dispatch] = useReducer(inputReducer, initVal);

  const inputValueValid = validFun(inputState.value);
  const error = !inputState.isTauched || inputValueValid;

  const inputHandler = (event) => {
    dispatch({
      type: "INPUT",
      value: event.target.value,
    });
  };
  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };
  const resetValue = () => {
    dispatch({ type: "RESET" });
  };
  return {
    value: inputState.value,
    isValid: inputValueValid,
    error,
    inputHandler,
    inputBlurHandler,
    resetValue,
  };
};

export default useInput;
