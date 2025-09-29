import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../recoil/atoms';

let id = 0;
function getId() {
  return id++;
}

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    if (inputValue.trim()) {
      setTodoList((oldTodoList) => [
        ...oldTodoList,
        {
          id: getId(),
          text: inputValue,
          isComplete: false,
        },
      ]);
      setInputValue('');
    }
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      marginBottom: '20px', 
      padding: '10px', 
      border: '2px solid #007bff', 
      borderRadius: '5px',
      backgroundColor: '#f8f9fa'
    }}>
      <input
        type="text"
        value={inputValue}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter a new todo item..."
        style={{
          flex: 1,
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '3px',
          marginRight: '10px'
        }}
      />
      <button
        onClick={addItem}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        Add Todo
      </button>
    </div>
  );
};

export default TodoItemCreator;