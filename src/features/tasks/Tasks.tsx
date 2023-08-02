import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import { RootState } from '../../store';

export default function Tasks(): JSX.Element {
  const tasks = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();
  function handleChangeStatus(id: string): void {
    dispatch({ type: 'tasks/changeStatus', payload: id });
  }
  function handleRemove(id: string): void {
    dispatch({ type: 'tasks/remove', payload: id });
  }
  return (
    <div>
      <h1>TODO List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <span style={task.isDone ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
              <b>{task.title}</b> {task.description}
            </span>
            <PublishedWithChangesIcon onClick={() => handleChangeStatus(task.id)} />
            <DeleteIcon onClick={() => handleRemove(task.id)} />
          </li>
        ))}
      </ul>
    </div>
  );
}
