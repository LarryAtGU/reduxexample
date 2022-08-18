import classes from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authAction } from "../store/auth";
import { Link, Route, Routes } from "react-router-dom";
import App from "../App";

const Header = () => {
  const isLogin = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  const logOutHandler = () => {
    dispatch(authAction.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isLogin && (
          <ul>
            <li>
              <Link to={"/"}>My product</Link>
            </li>
            <li>
              <Link to={"/"}>My Sales</Link>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>

      <Routes>
        <Route path="/abc" element={<Header />}></Route>
      </Routes>
    </header>
  );
};

export default Header;
