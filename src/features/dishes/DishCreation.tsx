import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './Dishes.module.css';

export default function DishCreation(): JSX.Element {
  const [title, setTitle] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [price, setPrice] = useState<number>(0);
  const [image, setImage] = useState<string>('');
  const dispatch = useDispatch();
  const [error, setError] = useState<string>('');
  function clearInputsAndError(): void {
    setTitle('');
    setCategory('');
    setPrice(0);
    setImage('');
    setError('');
  }
  function validateInputs(): boolean {
    if (title.trim() === '') {
      setError('Название не должно быть пустым');
      return false;
    }
    if (category.trim() === '') {
      setError('Выберите категорию');
      return false;
    }
    if (image.trim() === '') {
      setError('Заполните поле картинка');
      return false;
    }
    if (price < 0) {
      setError('Цена не может быть отрицательной');
      return false;
    }
    return true;
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (validateInputs()) {
      dispatch({
        type: 'dishes/create',
        payload: {
          title,
          category,
          image,
          price,
        },
      });
      clearInputsAndError();
    }
  }
  return (
    <div className={styles.pageAddStyle}>
      <h1>Add new dish</h1>
      <form className={styles.formAddStyle} onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            category
          </option>
          <option value="main">main</option>
          <option value="dessert">dessert</option>
          <option value="snacks">snacks</option>
        </select>
        <input
          type="text"
          placeholder="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button type="submit">Сохранить</button>
      </form>
    </div>
  );
}
