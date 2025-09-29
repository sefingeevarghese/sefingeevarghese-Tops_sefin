import React from 'react';
import './App.css';
import FruitList from './components/FruitList';
import UserList from './components/UserList';

function App() {
  return (
    <div className="App">
      <h1>React Lists and Keys Practice</h1>
      <div className="two-column-layout">
        <div className="task-section">
          <h2>Fruits</h2>
          <FruitList />
        </div>
        <div className="task-section">
          <h2>Users</h2>
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;