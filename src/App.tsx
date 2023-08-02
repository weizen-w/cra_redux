import React from 'react';
import './App.css';
import Counter from './features/counter/Counter';
import Sandwich from './features/sandwich/Sandwich';

function App(): JSX.Element {
  return (
    <div>
      <Counter />
      <Sandwich />
    </div>
  );
}

export default App;
