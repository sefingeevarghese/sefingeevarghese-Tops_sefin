import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import './styles/App.css';

function App() {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>CRUD Dashboard</h1>
        <p>Modern User Management with Redux Toolkit</p>
      </header>

      <main className="app-main">
        <UserForm editingUser={editingUser} setEditingUser={setEditingUser} />
        <UserList setEditingUser={setEditingUser} />
      </main>

      <footer className="app-footer">
        <p> Built with React.js and Redux Toolkit | Modern Design & State Management</p>
      </footer>
    </div>
  );
}

export default App;
