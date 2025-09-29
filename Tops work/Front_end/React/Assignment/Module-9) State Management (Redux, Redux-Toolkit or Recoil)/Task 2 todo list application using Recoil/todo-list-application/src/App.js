import React from 'react';
import TodoItemCreator from './components/TodoItemCreator';
import TodoList from './components/TodoList';
import TodoListFilter from './components/TodoListFilter';
import TodoListStats from './components/TodoListStats';

function App() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{
        textAlign: 'center',
        color: '#333',
        marginBottom: '30px',
        fontSize: '2.5rem'
      }}>
         Todo List App with Recoil
      </h1>
      
      <TodoListStats />
      <TodoItemCreator />
      <TodoListFilter />
      <TodoList />
    </div>
  );
}

export default App;
