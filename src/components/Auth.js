import classes from "./Auth.module.css";
import useInput from "../hooks/use-input-reducer";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/auth";
import { Fragment } from "react";
const Auth = () => {
  const isLogin = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const login = () => {
    dispatch(authAction.login());
  };

  const {
    value: email,
    isValid: emailValid,
    error: emailFieldIsValid,
    inputHandler: emailInputHandler,
    inputBlurHandler: emailBlurHandler,
    resetValue: resetEmal,
  } = useInput((inp) => inp.includes("@"));

  const {
    value: password,
    isValid: passwordValid,
    error: passwordFieldIsValid,
    inputHandler: passwordInputHandler,
    inputBlurHandler: passwordBlurHandler,
    resetValue: resetPassword,
  } = useInput((inp) => inp.length > 3);

  const isFormValid = emailValid && passwordValid;

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    resetEmal();
    resetPassword();
    login();
  };

  return (
    <Fragment>
      {!isLogin && (
        <main className={classes.auth}>
          <section>
            <form onSubmit={submitHandler}>
              <div className={classes.control}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  onChange={emailInputHandler}
                  onBlur={emailBlurHandler}
                  value={email}
                />
                {!emailFieldIsValid && <p>Please input an valid email</p>}
              </div>
              <div className={classes.control}>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  onChange={passwordInputHandler}
                  onBlur={passwordBlurHandler}
                  value={password}
                />
                {!passwordFieldIsValid && (
                  <p>Please input a password longer than 3 characters</p>
                )}
              </div>
              <button disabled={!isFormValid}>Login</button>
            </form>
          </section>
        </main>
      )}
    </Fragment>
  );
};

export default Auth;
