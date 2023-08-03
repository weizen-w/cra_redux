import React from 'react';
import styles from './Home.module.css';

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      Добро пожаловать на мой сайт. Здесь я изучаю React и Redux.
    </div>
  );
}
