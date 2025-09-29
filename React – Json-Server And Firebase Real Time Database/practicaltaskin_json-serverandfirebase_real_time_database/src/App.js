import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import JsonServerCRUD from './components/JsonServerCRUD';
import FirebaseCRUD from './components/FirebaseCRUD';
import PublicAPITable from './components/PublicAPITable';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <div className="nav-container">
            <h1 className="nav-title">React CRUD Application</h1>
            <ul className="nav-menu">
              <li className="nav-item">
                <Link to="/" className="nav-link">Public API Table</Link>
              </li>
              <li className="nav-item">
                <Link to="/json-server" className="nav-link">JSON Server CRUD</Link>
              </li>
              <li className="nav-item">
                <Link to="/firebase" className="nav-link">Firebase CRUD</Link>
              </li>
            </ul>
          </div>
        </nav>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<PublicAPITable />} />
            <Route path="/json-server" element={<JsonServerCRUD />} />
            <Route path="/firebase" element={<FirebaseCRUD />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 React CRUD Application. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">
                JSONPlaceholder API
              </a>
              <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                Firebase
              </a>
              <a href="https://github.com/typicode/json-server" target="_blank" rel="noopener noreferrer">
                JSON Server
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
