import StudentCredentials from './StudentCredentials';

type Action =
  | { type: 'students/add'; payload: StudentCredentials }
  | { type: 'students/delete'; payload: string }
  | { type: 'students/editGroup'; payload: { id: string; newGroup: string } };

export default Action;
