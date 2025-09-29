import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser, updateUser } from '../store/usersSlice';
import Swal from 'sweetalert2';

const UserForm = ({ editingUser, setEditingUser }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: ''
  });

  useEffect(() => {
    if (editingUser) {
      setFormData({
        name: editingUser.name,
        email: editingUser.email,
        age: editingUser.age
      });
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name && formData.email && formData.age) {
      if (editingUser) {
        dispatch(updateUser({
          id: editingUser.id,
          name: formData.name,
          email: formData.email,
          age: parseInt(formData.age)
        }));
        
        // Show Sweet Alert for update success
        Swal.fire({
          title: 'Success!',
          text: `User "${formData.name}" has been updated successfully!`,
          icon: 'success',
          confirmButtonText: 'Great!',
          confirmButtonColor: '#28a745'
        });
        
        setEditingUser(null);
        
        // Scroll to bottom to see the updated user in the list
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        }, 100);
      } else {
        dispatch(addUser({
          name: formData.name,
          email: formData.email,
          age: parseInt(formData.age)
        }));
        
        // Scroll to bottom to see the new user in the list
        setTimeout(() => {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
          });
        }, 100);
      }
      
      setFormData({ name: '', email: '', age: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCancel = () => {
    setEditingUser(null);
    setFormData({ name: '', email: '', age: '' });
  };

  return (
    <div className="user-form">
      <h3 className="form-title">{editingUser ? 'Update User' : 'Add New User'}</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter full name"
            />
          </div>
          
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter email address"
            />
          </div>
          
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Enter age"
              min="1"
              max="120"
            />
          </div>
        </div>
        
        <div className="form-buttons">
          <button type="submit" className="btn btn-primary">
            {editingUser ? '✏️ Update User' : '➕ Add User'}
          </button>
          
          {editingUser && (
            <button 
              type="button" 
              onClick={handleCancel}
              className="btn btn-secondary"
            >
              ❌ Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default UserForm;