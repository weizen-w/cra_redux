import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

export default function Sandwich(): JSX.Element {
  const dispatch = useDispatch();
  const sandwich = useSelector((state: RootState) => state.sandwich.value);
  const counter = useSelector((state: RootState) => state.counter.value);
  function handleBread(): void {
    dispatch({ type: 'sandwich/add', payload: counter, value: 'bread' });
  }
  function handleSausage(): void {
    dispatch({ type: 'sandwich/add', payload: counter, value: 'sausage' });
  }
  function handleCheese(): void {
    dispatch({ type: 'sandwich/add', payload: counter, value: 'cheese' });
  }
  function removeSandwich(): void {
    dispatch({ type: 'sandwich/delete' });
  }
  return (
    <div>
      <button type="button" onClick={handleBread}>Add bread</button>
      <button type="button" onClick={handleSausage}>Add sausage</button>
      <button type="button" onClick={handleCheese}>Add cheese</button>
      <p>{sandwich}</p>
      <button type="button" onClick={removeSandwich}>Throw away the sandwich</button>
    </div>
  );
}
