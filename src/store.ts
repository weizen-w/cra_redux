import { combineReducers, createStore } from 'redux';
import counterReducer from './features/counter/counterReducer';
import sandwichReducer from './features/sandwich/sandwichReducer';
import tasksReducer from './features/tasks/tasksReducer';
import booksReducer from './features/books/booksReducer';
import moviesReducer from './features/movies/moviesReducer';
import studentsReducer from './features/students/studentsReducer';

const store = createStore(
  combineReducers({
    counter: counterReducer,
    sandwich: sandwichReducer,
    tasks: tasksReducer,
    books: booksReducer,
    movies: moviesReducer,
    students: studentsReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
