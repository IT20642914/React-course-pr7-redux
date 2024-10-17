import classes from './Counter.module.css';
import { useSelector ,useDispatch} from 'react-redux';
import { counterActions } from '../store/counterSlice';
const Counter = () => {
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);
  const dispatch=useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
const handleActionIncrement=()=>{
  dispatch(counterActions.increment());
}
const handleActionDecrement=()=>{
  dispatch(counterActions.decrement());
}
const handleIncreaseBy5=()=>{
  dispatch(counterActions.increaseBy5(5));
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    { show&& <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={()=>{handleActionIncrement("INCREMENT")}}>INCREMENT</button>
        <button onClick={()=>{handleIncreaseBy5()}}>INCREASE By 5</button>

        <button onClick={()=>{handleActionDecrement("DECREMENT")}}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
