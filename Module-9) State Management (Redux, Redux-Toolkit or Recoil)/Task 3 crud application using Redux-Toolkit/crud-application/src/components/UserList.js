import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../store/usersSlice';
import Swal from 'sweetalert2';

const UserList = ({ setEditingUser }) => {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();

  const handleDelete = (id, userName) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete user "${userName}"? This action cannot be undone!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteUser(id));
        
        // Show success message after deletion
        Swal.fire({
          title: 'Deleted!',
          text: `User "${userName}" has been deleted successfully.`,
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#28a745'
        });
      }
    });
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    // Scroll to top smoothly when editing a user
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="user-list">
      <div className="list-header">
        <h3 className="list-title">Users Directory</h3>
        <div className="user-count">{users.length} {users.length === 1 ? 'User' : 'Users'}</div>
      </div>
      
      {users.length === 0 ? (
        <div className="empty-state">
          <div className="empty-state-icon">👥</div>
          <h3>No users found</h3>
          <p>Add some users to get started with your directory!</p>
        </div>
      ) : (
        <div className="users-grid">
          {users.map(user => (
            <div key={user.id} className="user-card">
              <div className="user-card-content">
                <div className="user-info">
                  <h4>{user.name}</h4>
                  <div className="user-detail">
                    <strong>📧 Email:</strong> {user.email}
                  </div>
                  <div className="user-detail">
                    <strong>🎂 Age:</strong> {user.age} years old
                  </div>
                </div>
                
                <div className="user-actions">
                  <button 
                    onClick={() => handleEdit(user)}
                    className="btn btn-edit"
                  >
                    ✏️ Edit
                  </button>
                  
                  <button 
                    onClick={() => handleDelete(user.id, user.name)}
                    className="btn btn-delete"
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;