import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from '../layout/ErrorPage/ErrorPage';
import Home from '../layout/Home/Home';
import Layout from '../layout/Layout/Layout';
import Counter from '../features/counter/Counter';
import Sandwich from '../features/sandwich/Sandwich';
import Tasks from '../features/tasks/Tasks';
import TaskCreation from '../features/tasks/TaskCreation';
import BookCreation from '../features/books/BookCreation';
import Books from '../features/books/Books';
import Movies from '../features/movies/Movies';
import MovieCreation from '../features/movies/MovieCreation';
import StudentCreation from '../features/students/StudentCreation';
import Students from '../features/students/Students';
import Dishes from '../features/dishes/Dishes';
import DishCreation from '../features/dishes/DishCreation';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="sandwich" element={<><Counter /><Sandwich /></>} />
        <Route path="tasks" element={<><Tasks /><TaskCreation /></>} />
        <Route path="books" element={<><Books /><BookCreation /></>} />
        <Route path="movies" element={<><MovieCreation /><Movies /></>} />
        <Route path="students" element={<><StudentCreation /><Students /></>} />
        <Route path="dishes" element={<><DishCreation /><Dishes /></>} />
      </Route>
    </Routes>
  );
}

export default App;
