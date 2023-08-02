import { combineReducers, createStore } from 'redux';
import counterReducer from './features/counter/counterReducer';
import sandwichReducer from './features/sandwich/sandwichReducer';
import tasksReducer from './features/tasks/tasksReducer';

const store = createStore(
  combineReducers({
    counter: counterReducer,
    sandwich: sandwichReducer,
    tasks: tasksReducer,
  })
);

export default store;

export type RootState = ReturnType<typeof store.getState>;
