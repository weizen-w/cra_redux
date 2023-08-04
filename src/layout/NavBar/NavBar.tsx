import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';

export default function NavBar(): JSX.Element {
  return (
    <nav className={styles.container}>
      <NavLink className={styles.link} to="/">Home</NavLink>
      <NavLink className={styles.link} to="sandwich">Sandwich</NavLink>
      <NavLink className={styles.link} to="tasks">Tasks</NavLink>
      <NavLink className={styles.link} to="books">Books</NavLink>
      <NavLink className={styles.link} to="movies">Movies</NavLink>
      <NavLink className={styles.link} to="students">Students</NavLink>
    </nav>
  );
}
