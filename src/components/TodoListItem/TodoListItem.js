import React from 'react';
import './style.css';

const TodoListItem = ({ item, selected, handleClick }) => {
  return (
    <li onClick={() => handleClick(item.id)}>
      <div className="li-title">{item.title}</div>
      {selected && <div className="li-content">{item.description}</div>}
    </li>
  );
};

export default TodoListItem;
