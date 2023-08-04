import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './Movies.module.css';
import MovieEdit from './MovieEdit';

export default function Movies(): JSX.Element {
  const movies = useSelector((state: RootState) => state.movies);
  const dispatch = useDispatch();
  const handleDelete = (id: string): void => {
    dispatch({ type: 'movies/delete', payload: id });
  };
  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <div className={styles.boxStyle} key={movie.id}>
            <img
              className={styles.imgStyle}
              src="https://www.zamki-mira.ru/imagecache/photo/574/no-photo_42.png"
              alt={movie.title}
            />
            <h2 className={styles.titleStyle}>
              {movie.title}
              <MovieEdit id={movie.id} />
            </h2>
            <div className={styles.infoStyle}>
              <p>Genre: {movie.genre}</p>
              <p>Country: {movie.country}</p>
              <p>Release: {movie.releaseDate}</p>
            </div>
            <DeleteIcon onClick={() => handleDelete(movie.id)} />
          </div>
        ))}
      </ul>
    </div>
  );
}
