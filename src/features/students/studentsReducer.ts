import { uid } from 'uid';
import Action from './types/Action';
import Student from './types/Student';

const initialState: Student[] = [
  {
    id: uid(),
    firstName: 'Wladimir',
    secondName: 'Weizen',
    birthdate: '1992-08-04',
    group: 'Cohort-26',
  },
];

export default function studentsReducer(
  state: Student[] = initialState,
  action: Action
): Student[] {
  switch (action.type) {
    case 'students/add':
      return [...state, { ...action.payload, id: uid() }];
    case 'students/delete':
      return state.filter((student) => student.id !== action.payload);
    case 'students/editGroup':
      return state.map((student) =>
        student.id === action.payload.id
          ? { ...student, group: action.payload.newGroup }
          : student
      );
    default:
      return state;
  }
}
