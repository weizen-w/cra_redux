import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import styles from './Students.module.css';
import StudentEdit from './StudentEdit';

export default function Students(): JSX.Element {
  const students = useSelector((state: RootState) => state.students);
  const dispatch = useDispatch();
  const handleDelete = ((id: string): void => {
    dispatch({ type: 'students/delete', payload: id });
  });
  return (
    <div>
      <h1>Список студентов</h1>
      {students.map((student) => (
        <ul key={student.id}>
          <h2>
            {student.firstName} {student.secondName}
          </h2>
          <img
            className={styles.imgStyle}
            src="https://www.zamki-mira.ru/imagecache/photo/574/no-photo_42.png"
            alt={student.secondName}
          />
          <div>
            <p>Birthdate: {student.birthdate}</p>
            <p>Group: {student.group} <StudentEdit id={student.id} /></p>
          </div>
          <DeleteIcon onClick={() => handleDelete(student.id)} />
        </ul>
      ))}
    </div>
  );
}
