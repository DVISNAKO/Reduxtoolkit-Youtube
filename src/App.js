import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './features/counterSlice';
			;

function App() {

  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.value);

return (
<div className="App">
<div className='block'>
<button onClick={() => dispatch(increment())}>INC</button>
<p>Counter: {counterValue}</p>
<button onClick={() => dispatch(decrement())}>DEC</button>
</div>
</div>
);
}

export default App;


