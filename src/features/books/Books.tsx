import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { RootState } from '../../store';

export default function Tasks(): JSX.Element {
  const books = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch();
  function handleChangeStatus(id: string): void {
    dispatch({ type: 'books/changeStatus', payload: id });
  }
  function handleRemove(id: string): void {
    dispatch({ type: 'books/remove', payload: id });
  }
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span style={book.isRead ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
              <b>{book.title}</b> {book.description}
            </span>
            <PublishedWithChangesIcon onClick={() => handleChangeStatus(book.id)} />
            <DeleteIcon onClick={() => handleRemove(book.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
