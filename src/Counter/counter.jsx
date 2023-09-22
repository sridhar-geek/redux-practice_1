import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement } from './counterSlice'

const Counter = () => {
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()
  return (
    <div style={{display:'flex', justifyContent:'center', fontSize:'2rem'}}>
        <button onClick={() => dispatch(increment())}>+</button>
        <h4>{count}</h4>
        <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter