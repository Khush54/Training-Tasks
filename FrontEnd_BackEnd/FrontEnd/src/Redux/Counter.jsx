import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from './counterSlice';
import { decrement } from './counterSlice';
import { reset } from './counterSlice';
function Counter() {
    const count = useSelector((state)=> state.Counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <div>
                    Count: {count}
                </div>
                <div style={{display:'flex', gap: '10px'}}>
                    <button
                        onClick={() => dispatch(increment())}
                    >
                        Increment
                    </button>
                    
                    <button
                        onClick={() => dispatch(decrement())}
                    >
                        Decrement
                    </button>
                    <button
                        onClick={() => dispatch(reset())}
                    >
                        Reset
                    </button>
                </div>
            </div>
        </>
    )
}

export default Counter

