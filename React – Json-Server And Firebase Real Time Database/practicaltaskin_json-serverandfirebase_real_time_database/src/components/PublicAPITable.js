import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import './PublicAPITable.css';

const PublicAPITable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  // Fetch users from JSONPlaceholder API
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users: ' + err.message);
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Handle sorting
  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  // Filter and sort users
  const filteredAndSortedUsers = users
    .filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm) ||
      user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      // Handle nested properties
      if (sortBy === 'company') {
        aValue = a.company.name;
        bValue = b.company.name;
      }
      
      if (sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading && users.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <div className="public-api-table">
      <h2>Public API Users Table</h2>
      
      {error && (
        <div className="error-message">
          {error}
          <button onClick={fetchUsers} className="retry-button">
            Retry
          </button>
        </div>
      )}
      
      {/* Search and Controls */}
      <div className="controls">
        <div className="search-section">
          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        
        <div className="sort-section">
          <label>Sort by: </label>
          <select 
            value={sortBy} 
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="name">Name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="company">Company</option>
          </select>
          <button 
            onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
            className="sort-order-button"
          >
            {sortOrder === 'asc' ? '↑' : '↓'}
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="table-container">
        {loading && <LoadingSpinner />}
        
        {!loading && filteredAndSortedUsers.length === 0 && (
          <div className="no-results">
            {searchTerm ? 'No users found matching your search.' : 'No users available.'}
          </div>
        )}
        
        {!loading && filteredAndSortedUsers.length > 0 && (
          <table className="users-table">
            <thead>
              <tr>
                <th onClick={() => handleSort('name')} className="sortable-header">
                  Name {sortBy === 'name' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('email')} className="sortable-header">
                  Email {sortBy === 'email' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('phone')} className="sortable-header">
                  Phone {sortBy === 'phone' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
                <th onClick={() => handleSort('company')} className="sortable-header">
                  Company {sortBy === 'company' && (sortOrder === 'asc' ? '↑' : '↓')}
                </th>
                <th>Address</th>
                <th>Website</th>
              </tr>
            </thead>
            <tbody>
              {filteredAndSortedUsers.map(user => (
                <tr key={user.id}>
                  <td>
                    <div className="user-name">
                      <strong>{user.name}</strong>
                      <span className="username">@{user.username}</span>
                    </div>
                  </td>
                  <td>
                    <a href={`mailto:${user.email}`} className="email-link">
                      {user.email}
                    </a>
                  </td>
                  <td>
                    <a href={`tel:${user.phone}`} className="phone-link">
                      {user.phone}
                    </a>
                  </td>
                  <td>
                    <div className="company-info">
                      <strong>{user.company.name}</strong>
                      <span className="catchphrase">{user.company.catchPhrase}</span>
                    </div>
                  </td>
                  <td>
                    <div className="address-info">
                      <div>{user.address.street}, {user.address.suite}</div>
                      <div>{user.address.city}, {user.address.zipcode}</div>
                    </div>
                  </td>
                  <td>
                    <a 
                      href={user.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="website-link"
                    >
                      {user.website}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      
      {/* Results Summary */}
      {!loading && filteredAndSortedUsers.length > 0 && (
        <div className="results-summary">
          Showing {filteredAndSortedUsers.length} of {users.length} users
          {searchTerm && ` matching "${searchTerm}"`}
        </div>
      )}
    </div>
  );
};

export default PublicAPITable; 