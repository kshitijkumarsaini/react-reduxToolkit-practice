import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmt } from './counterSlice';

const Counter = () => {
  const [amt, setAmt] = useState(0);

  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  const addValue = Number(amt) || 0;

  const resetAll = () => {
    setAmt(0);
    dispatch(reset());
  };

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <input type="text" value={amt} onChange={(e) => setAmt(e.target.value)} />

      <div>
        <button onClick={() => dispatch(incrementByAmt(addValue))}>
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </section>
  );
};

export default Counter;
