import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './Sandwich.module.css';

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
    <div className={styles.boxStyle}>
      <h3>Select ingredient</h3>
      <button className={styles.btnStyle} type="button" onClick={handleBread}>Add bread</button>
      <button className={styles.btnStyle} type="button" onClick={handleSausage}>Add sausage</button>
      <button className={styles.btnStyle} type="button" onClick={handleCheese}>Add cheese</button>
      <p className={styles.textStyle}>{sandwich}</p>
      <button className={styles.btnDeletStyle} type="button" onClick={removeSandwich}>Throw away the sandwich</button>
    </div>
  );
}
