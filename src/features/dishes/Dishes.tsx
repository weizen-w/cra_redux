import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import DishEdit from './DishEdit';
import styles from './Dishes.module.css';

export default function Dishes(): JSX.Element {
  const dishes = useSelector((state: RootState) => state.dishes);
  return (
    <div className={styles.pageDishStyle}>
      <h1 className={styles.headTitleStyle}>Dishes</h1>
      <div className={styles.pageBoxStyle}>
        {dishes.map((dish) => (
          <DishEdit
            id={dish.id}
            title={dish.title}
            category={dish.category}
            price={dish.price}
            image={dish.image}
            description={dish.description}
          />
        ))}
      </div>
    </div>
  );
}
