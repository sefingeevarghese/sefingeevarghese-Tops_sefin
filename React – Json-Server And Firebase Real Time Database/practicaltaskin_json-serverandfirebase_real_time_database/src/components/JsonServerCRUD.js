import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import './JsonServerCRUD.css';

const JsonServerCRUD = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [serverStatus, setServerStatus] = useState('checking');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: ''
  });
  const [editingId, setEditingId] = useState(null);

  const API_BASE_URL = 'http://localhost:3001';

  // GET - Fetch all users
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      setUsers(response.data);
      setServerStatus('online');
    } catch (err) {
      if (err.code === 'ECONNREFUSED' || err.message.includes('404')) {
        setError(`JSON Server is not running. Please start it with: npm run server`);
        setServerStatus('offline');
      } else {
        setError('Failed to fetch users: ' + err.message);
        setServerStatus('error');
      }
      console.error('JSON Server Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // POST - Create new user
  const createUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(`${API_BASE_URL}/users`, formData);
      setUsers([...users, response.data]);
      setFormData({ name: '', email: '', phone: '', city: '' });
    } catch (err) {
      if (err.code === 'ECONNREFUSED' || err.message.includes('404')) {
        setError(`JSON Server is not running. Please start it with: npm run server`);
      } else {
        setError('Failed to create user: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // PUT - Update user
  const updateUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(`${API_BASE_URL}/users/${editingId}`, formData);
      setUsers(users.map(user => user.id === editingId ? response.data : user));
      setFormData({ name: '', email: '', phone: '', city: '' });
      setEditingId(null);
    } catch (err) {
      if (err.code === 'ECONNREFUSED' || err.message.includes('404')) {
        setError(`JSON Server is not running. Please start it with: npm run server`);
      } else {
        setError('Failed to update user: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // PATCH - Partial update user
  const patchUser = async (id, updates) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.patch(`${API_BASE_URL}/users/${id}`, updates);
      setUsers(users.map(user => user.id === id ? response.data : user));
    } catch (err) {
      if (err.code === 'ECONNREFUSED' || err.message.includes('404')) {
        setError(`JSON Server is not running. Please start it with: npm run server`);
      } else {
        setError('Failed to patch user: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  // DELETE - Delete user
  const deleteUser = async (id) => {
    setLoading(true);
    setError(null);
    try {
      await axios.delete(`${API_BASE_URL}/users/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (err) {
      if (err.code === 'ECONNREFUSED' || err.message.includes('404')) {
        setError(`JSON Server is not running. Please start it with: npm run server`);
      } else {
        setError('Failed to delete user: ' + err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditingId(user.id);
  };

  const handleCancelEdit = () => {
    setFormData({ name: '', email: '', phone: '', city: '' });
    setEditingId(null);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading && users.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <div className="json-server-crud">
      <div className="header-section">
        <h2>JSON Server CRUD Operations</h2>
        <div className={`server-status ${serverStatus}`}>
          <span className="status-dot"></span>
          <span className="status-text">
            {serverStatus === 'online' && 'Server Online'}
            {serverStatus === 'offline' && 'Server Offline'}
            {serverStatus === 'error' && 'Server Error'}
            {serverStatus === 'checking' && 'Checking Server...'}
          </span>
        </div>
      </div>
      
      {error && (
        <div className="error-message">
          {error}
          {error.includes('JSON Server is not running') && (
            <div className="server-setup-notice">
              <p><strong>To start JSON Server:</strong></p>
              <ol>
                <li>Open a new terminal window</li>
                <li>Navigate to your project directory</li>
                <li>Run: <code>npm run server</code></li>
                <li>Keep the terminal open (JSON Server needs to keep running)</li>
                <li>Refresh this page</li>
              </ol>
              <p><strong>Note:</strong> JSON Server will run on <code>http://localhost:3001</code></p>
            </div>
          )}
        </div>
      )}
      
      {/* Form for Create/Update */}
      <form onSubmit={editingId ? updateUser : createUser} className="user-form">
        <h3>{editingId ? 'Edit User' : 'Add New User'}</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleInputChange}
          required
        />
        <div className="form-buttons">
          <button type="submit" disabled={loading}>
            {editingId ? 'Update User' : 'Add User'}
          </button>
          {editingId && (
            <button type="button" onClick={handleCancelEdit}>
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* Users Table */}
      <div className="users-section">
        <h3>Users List</h3>
        {loading && <LoadingSpinner />}
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.city}</td>
                <td>
                  <button onClick={() => handleEdit(user)}>Edit</button>
                  <button onClick={() => patchUser(user.id, { city: 'Updated City' })}>
                    Patch
                  </button>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JsonServerCRUD; 