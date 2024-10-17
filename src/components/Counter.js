import classes from './Counter.module.css';
import { useSelector ,useDispatch} from 'react-redux';
const Counter = () => {
  const counter = useSelector(state => state.counter);
  const show = useSelector(state => state.showCounter);
  const dispatch=useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type:'TOGGLE'});
  };
const handleAction=(action)=>{
  dispatch({type:action});
}
const handleIncreaseBy5=()=>{
  dispatch({type:'INCREMENTBY5',amount:5});
}
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
    { show&& <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={()=>{handleAction("INCREMENT")}}>INCREMENT</button>
        <button onClick={()=>{handleIncreaseBy5()}}>INCREASE By 5</button>

        <button onClick={()=>{handleAction("DECREMENT")}}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
