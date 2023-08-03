import BookCredentials from './BookCredentials';

type Action =
  | { type: 'books/add'; payload: BookCredentials }
  | { type: 'books/changeStatus'; payload: string }
  | { type: 'books/remove'; payload: string };

export default Action;
