import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Counter(): JSX.Element {
  const dispatch = useDispatch();
  function handlePlus(): void {
    dispatch({ type: 'counter/plus', payload: 1 });
  }
  function handleMinus(): void {
    dispatch({ type: 'counter/minus', payload: 1 });
  }
  function handlePlusTen(): void {
    dispatch({ type: 'counter/plus', payload: 10 });
  }
  function handleMinusTen(): void {
    dispatch({ type: 'counter/minus', payload: 10 });
  }
  const counter = useSelector((state: RootState) => state.counter.value);
  return (
    <div>
      <button type="button" onClick={handleMinusTen}>-10</button>
      <button type="button" onClick={handleMinus}>-</button>
      {counter}
      <button type="button" onClick={handlePlus}>+</button>
      <button type="button" onClick={handlePlusTen}>+10</button>
    </div>
  );
}
