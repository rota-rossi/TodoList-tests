import React, { useState } from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

import './style.css';
import listItems from '../../../assets/initialItems.json';

const TodoList = () => {
  const [currentItem, setCurrentItem] = useState(0);

  const handleClickItem = itemId => {
    setCurrentItem(itemId);
  };

  return (
    <div className="todolist-area">
      <ul>
        {listItems.map(item => (
          <TodoListItem
            key={item.id}
            item={item}
            selected={item.id === currentItem}
            handleClick={handleClickItem}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
