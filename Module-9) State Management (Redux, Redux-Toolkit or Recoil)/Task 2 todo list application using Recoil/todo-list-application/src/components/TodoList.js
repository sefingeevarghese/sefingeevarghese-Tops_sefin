import React from 'react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../recoil/atoms';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <div style={{ marginBottom: '20px' }}>
      {todoList.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '20px',
          color: '#666',
          fontSize: '18px',
          fontStyle: 'italic'
        }}>
          No todos yet. Add one above!
        </div>
      ) : (
        todoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem} />
        ))
      )}
    </div>
  );
};

export default TodoList;