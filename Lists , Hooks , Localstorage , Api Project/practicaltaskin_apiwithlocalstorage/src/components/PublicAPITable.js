import React, { useState, useEffect } from 'react';
import './PublicAPITable.css';

const PublicAPITable = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(10);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      // Fetch from JSONPlaceholder API (public API)
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error('Failed to fetch users:', error);
      setError('Failed to fetch users. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Filter users based on search term
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.company.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return (
      <div className="public-api-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Fetching users from public API...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="public-api-container">
        <div className="error-message">
          <h3>Error</h3>
          <p>{error}</p>
          <button onClick={fetchUsers} className="retry-btn">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="public-api-container">
      <div className="api-header">
        <h2>Public API Users Table</h2>
        <p>Data fetched from JSONPlaceholder API (https://jsonplaceholder.typicode.com/users)</p>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-input-container">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search users by name, email, or company..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
        <div className="results-info">
          Showing {currentUsers.length} of {filteredUsers.length} users
        </div>
      </div>

      {/* Users Table */}
      <div className="table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Company</th>
              <th>Website</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
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
                <td>{user.phone}</td>
                <td>
                  <div className="company-info">
                    <strong>{user.company.name}</strong>
                    <span className="catchphrase">{user.company.catchPhrase}</span>
                  </div>
                </td>
                <td>
                  <a 
                    href={`https://${user.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="website-link"
                  >
                    {user.website}
                  </a>
                </td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="page-btn"
          >
            Previous
          </button>
          
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`page-btn ${currentPage === page ? 'active' : ''}`}
            >
              {page}
            </button>
          ))}
          
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="page-btn"
          >
            Next
          </button>
        </div>
      )}

      {/* API Info */}
      <div className="api-info">
        <h3>API Information</h3>
        <div className="info-grid">
          <div className="info-item">
            <strong>API Endpoint:</strong>
            <span>https://jsonplaceholder.typicode.com/users</span>
          </div>
          <div className="info-item">
            <strong>Method:</strong>
            <span>GET</span>
          </div>
          <div className="info-item">
            <strong>Total Users:</strong>
            <span>{users.length}</span>
          </div>
          <div className="info-item">
            <strong>Filtered Results:</strong>
            <span>{filteredUsers.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicAPITable; 