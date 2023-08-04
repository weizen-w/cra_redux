import { combineReducers, createStore } from 'redux';
import counterReducer from './features/counter/counterReducer';
import sandwichReducer from './features/sandwich/sandwichReducer';
import tasksReducer from './features/tasks/tasksReducer';
import booksReducer from './features/books/booksReducer';
import moviesReducer from './features/movies/moviesReducer';

const store = createStore(
  combineReducers({
    counter: counterReducer,
    sandwich: sandwichReducer,
    tasks: tasksReducer,
    books: booksReducer,
    movies: moviesReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
