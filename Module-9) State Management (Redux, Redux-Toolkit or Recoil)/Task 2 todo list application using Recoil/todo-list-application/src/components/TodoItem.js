import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms';

const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '10px', 
      border: '1px solid #ddd', 
      borderRadius: '5px', 
      marginBottom: '5px',
      backgroundColor: item.isComplete ? '#f0f8f0' : '#fff'
    }}>
      <input
        type="text"
        value={item.text}
        onChange={editItemText}
        style={{
          flex: 1,
          marginRight: '10px',
          padding: '5px',
          border: '1px solid #ccc',
          borderRadius: '3px',
          textDecoration: item.isComplete ? 'line-through' : 'none',
          backgroundColor: item.isComplete ? '#e8f5e8' : '#fff'
        }}
      />
      <button
        onClick={toggleItemCompletion}
        style={{
          marginRight: '5px',
          padding: '5px 10px',
          backgroundColor: item.isComplete ? '#28a745' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        {item.isComplete ? 'Undo' : 'Complete'}
      </button>
      <button
        onClick={deleteItem}
        style={{
          padding: '5px 10px',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        Delete
      </button>
    </div>
  );
};

// Utility functions
function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;