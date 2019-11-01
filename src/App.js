import React from 'react';
import TodoList from './components/TodoList/TodoList';
import Title from './components/Title/Title';

export const App = () => (
  <div>
    <Title />
    <TodoList />
    <p>FOOTER!</p>
  </div>
);

export default App;
