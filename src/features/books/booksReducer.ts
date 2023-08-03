import { uid } from 'uid';
import Action from './types/Action';
import BooksState from './types/BooksState';

const initialState: BooksState = [
  {
    id: uid(),
    title: 'Основы Redux',
    description: 'Материалы для изучения Redux, CSS modules и тд. @автор K.Faul',
    isRead: false,
  },
];

export default function booksReducer(
  state: BooksState = initialState,
  action: Action
): BooksState {
  switch (action.type) {
    case 'books/add':
      return [...state, { ...action.payload, id: uid() }];
    case 'books/changeStatus':
      return state.map((book) =>
        book.id === action.payload ? { ...book, isRead: !book.isRead } : book
      );
    case 'books/remove':
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}
