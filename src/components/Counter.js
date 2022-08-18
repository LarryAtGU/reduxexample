import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterAction } from "../store/counter";
import { Component } from "react";
const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterAction.tog());
  };

  const increaseHandler = () => {
    dispatch(counterAction.inc());
  };
  const increaseHandler5 = () => {
    dispatch(counterAction.incb(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- {showCounter && counter} --</div>
      <div>
        <button onClick={increaseHandler}>Inc</button>
        <button onClick={increaseHandler5}>Inc by 5</button>
        <button
          onClick={() => {
            dispatch(counterAction.dec());
          }}
        >
          Dec
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   increaseHandler() {
//     this.props.inc();
//   }
//   decreaseHandler() {
//     this.props.dec();
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>-- {this.props.counter} --</div>
//         <button onClick={this.increaseHandler.bind(this)}>Inc</button>
//         <button onClick={this.props.dec.bind(this)}>Dec</button>

//         <button onClick={() => {}}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     inc: () => dispatch({ type: "inc" }),
//     dec: () => dispatch({ type: "dec" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
