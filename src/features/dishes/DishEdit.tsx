import React, { FormEvent, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import styles from './Dishes.module.css';
import Dish from './types/Dish';

export default function DishEdit(props: Dish): JSX.Element {
  const {
 id, title, category, price, image
} = props;
  const [inputTitle, setInputTitle] = useState<string>(title);
  const [inputCategory, setInputCategory] = useState<string>(category);
  const [inputPrice, setInputPrice] = useState<number>(price);
  const [inputImage, setInputImage] = useState<string>(image);
  const [toggle, setToggle] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleDelete = (): void => {
    dispatch({ type: 'dishes/delete', payload: id });
  };
  function handleEdit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    const newDish: Dish = {
      id,
      title: inputTitle,
      category: inputCategory,
      price: inputPrice,
      image: inputImage,
    };
    dispatch({ type: 'dishes/edit', payload: newDish });
    setToggle(false);
    setInputTitle(title);
    setInputCategory(category);
    setInputPrice(price);
    setInputImage(image);
  }
  return (
    <div>
      {!toggle ? (
        <div className={styles.boxStyle}>
          <h2 className={styles.titleStyle}>{title}</h2>
          <div className={styles.infoStyle}>
            <p><b>Price:</b> {price} €</p>
            <p><b>Category:</b> {category}</p>
          </div>
          <img className={styles.imgStyle} src={image} alt={title} />
          <div>
            <DeleteIcon onClick={handleDelete} />
            <EditIcon
              onClick={() => {
                setToggle(!toggle);
              }}
            />
          </div>
        </div>
      ) : (
        <form className={styles.formStyle} onSubmit={handleEdit}>
          <input
            type="text"
            placeholder="title"
            value={inputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <select
            name="category"
            value={inputCategory}
            onChange={(e) => setInputCategory(e.target.value)}
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
            value={inputPrice}
            onChange={(e) => setInputPrice(Number(e.target.value))}
          />
          <input
            type="text"
            placeholder="image"
            value={inputImage}
            onChange={(e) => setInputImage(e.target.value)}
          />
          <button type="submit">Сохранить</button>
        </form>
      )}
    </div>
  );
}
