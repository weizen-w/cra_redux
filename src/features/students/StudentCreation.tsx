import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

export default function StudentCreation(): JSX.Element {
  const [firstName, setFirstName] = useState<string>('');
  const [secondName, setSecondName] = useState<string>('');
  const today = new Date().toISOString().substring(0, 10);
  const [birthdate, setBirthdate] = useState<string>(today);
  const [group, setGroup] = useState<string>('');
  const dispatch = useDispatch();
  const [error, setError] = useState<string>('');
  function clearInputsAndError(): void {
    setFirstName('');
    setSecondName('');
    setBirthdate(today);
    setGroup('');
    setError('');
  }
  function validateInputs(): boolean {
    if (firstName.trim() === '') {
      setError('First name is required field');
      return false;
    }
    if (secondName.trim() === '') {
      setError('Second name is required field');
      return false;
    }
    if (group.trim() === '') {
      setError('Group is required field');
      return false;
    }
    return true;
  }
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (validateInputs()) {
      dispatch({
        type: 'students/add',
        payload: {
          firstName,
          secondName,
          birthdate,
          group,
        },
      });
      clearInputsAndError();
    }
  }
  return (
    <div>
      <h1>Добавить нового студента</h1>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Second name"
          value={secondName}
          onChange={(e) => setSecondName(e.target.value)}
        />
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Group"
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}
