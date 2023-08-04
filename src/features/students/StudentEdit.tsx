import React, { FormEvent, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';

interface Props {
  id: string;
}

export default function StudentEdit(props: Props): JSX.Element {
  const { id } = props;
  const [group, setGroup] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(false);
  const dispatch = useDispatch();
  function handleEdit(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    dispatch({ type: 'students/editGroup', payload: { id, newGroup: group } });
    setToggle(false);
    setGroup('');
  }
  return (
    <span>
      <EditIcon onClick={() => { setToggle(!toggle); }} />
      {toggle && (
        <form onSubmit={handleEdit}>
          <input
            type="text"
            placeholder="Group"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
          />
          <button type="submit">Сохранить</button>
        </form>
      )}
    </span>
  );
}
