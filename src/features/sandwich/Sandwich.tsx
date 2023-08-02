import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './Sandwich.module.css';

export default function Sandwich(): JSX.Element {
  const dispatch = useDispatch();
  const sandwich = useSelector((state: RootState) => state.sandwich.value);
  const counter = useSelector((state: RootState) => state.counter.value);
  function handleAddBread(): void {
    dispatch({ type: 'sandwich/add', payload: 'bread', quantity: counter });
  }
  function handleAddSausage(): void {
    dispatch({ type: 'sandwich/add', payload: 'sausage', quantity: counter });
  }
  function handleAddCheese(): void {
    dispatch({ type: 'sandwich/add', payload: 'cheese', quantity: counter });
  }
  function handleRemoveSandwich(): void {
    dispatch({ type: 'sandwich/delete' });
  }
  return (
    <div className={styles.boxStyle}>
      <h3>Select ingredient</h3>
      <button className={styles.btnStyle} type="button" onClick={handleAddBread}>Add bread</button>
      <button className={styles.btnStyle} type="button" onClick={handleAddSausage}>Add sausage</button>
      <button className={styles.btnStyle} type="button" onClick={handleAddCheese}>Add cheese</button>
      <p className={styles.textStyle}>{sandwich}</p>
      <button className={styles.btnDeletStyle} type="button" onClick={handleRemoveSandwich}>Throw away the sandwich</button>
    </div>
  );
}
