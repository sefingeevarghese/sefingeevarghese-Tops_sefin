import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import './User_profile.css';

function User_profile() {
    const navigate = useNavigate();
    const { userData } = useOutletContext() || {};
    
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        // Check if user is logged in
        const userId = localStorage.getItem('u_id');
        if (!userId) {
            navigate('/login');
            return;
        }

        getData();
    }, [navigate]);

    const getData = async () => {
        try {
            setLoading(true);
            setError('');
            
            const userId = localStorage.getItem('u_id');
            
            // Don't fetch data if user is admin (admin doesn't have profile in user table)
            if (userId === 'admin') {
                setUser({
                    id: 'admin',
                    name: 'Admin',
                    email: 'admin@gmail.com',
                    mobile: 'N/A'
                });
                setFormData({
                    name: 'Admin',
                    email: 'admin@gmail.com',
                    mobile: 'N/A',
                    password: '',
                    confirmPassword: ''
                });
                setLoading(false);
                return;
            }

            const res = await axios.get(`http://localhost:3001/user/${userId}`);
            console.log('User data:', res.data);
            
            setUser(res.data);
            setFormData({
                name: res.data.name || '',
                email: res.data.email || '',
                mobile: res.data.mobile || '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError('Failed to load user profile. Please try again.');
            toast.error('Failed to load user profile');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(''); // Clear error when user types
    };

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
        if (!isEditing) {
            // Reset form data to current user data when entering edit mode
            setFormData({
                name: user.name || '',
                email: user.email || '',
                mobile: user.mobile || '',
                password: '',
                confirmPassword: ''
            });
        }
    };

    const validation = () => {
        let isValid = true;
        
        if (formData.name.trim() === "") {
            toast.error('Name Field is required');
            isValid = false;
        } else if (formData.name.trim().length < 2) {
            toast.error('Name must be at least 2 characters long');
            isValid = false;
        }
        
        if (formData.email.trim() === "") {
            toast.error('Email Field is required');
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            toast.error('Please enter a valid email address');
            isValid = false;
        }
        
        if (formData.mobile.trim() === "") {
            toast.error('Mobile Field is required');
            isValid = false;
        } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
            toast.error('Please enter a valid 10-digit mobile number');
            isValid = false;
        }

        // Only validate password if user is editing and has entered a password
        if (isEditing && formData.password !== "") {
            if (formData.password.length < 6) {
                toast.error('Password must be at least 6 characters long');
                isValid = false;
            }
            
            if (formData.password !== formData.confirmPassword) {
                toast.error('Passwords do not match');
                isValid = false;
            }
        }
        
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (validation()) {
            try {
                const userId = localStorage.getItem('u_id');
                
                // Prepare data for update (exclude password fields if password is empty)
                const updateData = {
                    name: formData.name.trim(),
                    email: formData.email.trim(),
                    mobile: formData.mobile.trim()
                };

                // Only include password if user provided one
                if (formData.password !== "") {
                    updateData.password = formData.password;
                }

                const res = await axios.patch(`http://localhost:3001/user/${userId}`, updateData);
                console.log('Profile updated:', res.data);
                
                // Update localStorage with new data
                localStorage.setItem('u_name', formData.name.trim());
                localStorage.setItem('u_email', formData.email.trim());
                localStorage.setItem('u_mobile', formData.mobile.trim());
                
                // Update local state
                setUser(res.data);
                
                // Dispatch custom event to notify header component
                window.dispatchEvent(new Event('loginStateChanged'));
                
                swal({
                    title: "Success!",
                    text: "Profile updated successfully!",
                    icon: "success",
                    button: "OK",
                });
                
                setIsEditing(false);
                
                // Reset password fields
                setFormData(prev => ({
                    ...prev,
                    password: '',
                    confirmPassword: ''
                }));
                
            } catch (error) {
                console.error('Error updating profile:', error);
                setError('Failed to update profile. Please try again.');
                toast.error('Failed to update profile. Please try again.');
            }
        }
        setLoading(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset form data to original values
        setFormData({
            name: user.name || '',
            email: user.email || '',
            mobile: user.mobile || '',
            password: '',
            confirmPassword: ''
        });
        setError('');
    };

    if (loading && !isEditing) {
        return (
            <div className="user-profile-container">
                <div className="user-profile-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading profile...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="user-profile-container">
            <div className="user-profile-box">
                <div className="user-profile-header">
                    <h2>User Profile</h2>
                    <p>Manage your account information</p>
                </div>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit} className="user-profile-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="form-input"
                            disabled={!isEditing || loading}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-input"
                            disabled={!isEditing || loading}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="tel"
                            id="mobile"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            className="form-input"
                            disabled={!isEditing || loading}
                            required
                        />
                    </div>

                    {isEditing && (
                        <>
                            <div className="form-group">
                                <label htmlFor="password">New Password (Optional)</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="form-input"
                                    disabled={loading}
                                    placeholder="Leave blank to keep current password"
                                />
                            </div>

                            {formData.password && (
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm New Password</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        className="form-input"
                                        disabled={loading}
                                        placeholder="Confirm your new password"
                                    />
                                </div>
                            )}
                        </>
                    )}

                    <div className="user-profile-actions">
                        {!isEditing ? (
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleEditToggle}
                            >
                                <i className="fa fa-edit me-2"></i>
                                Edit Profile
                            </button>
                        ) : (
                            <div className="edit-actions">
                                <button
                                    type="submit"
                                    className="btn btn-success"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <div className="loading-spinner-small me-2"></div>
                                            Updating...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fa fa-save me-2"></i>
                                            Save Changes
                                        </>
                                    )}
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleCancel}
                                    disabled={loading}
                                >
                                    <i className="fa fa-times me-2"></i>
                                    Cancel
                                </button>
                            </div>
                        )}
                    </div>
                </form>

                <div className="user-profile-footer">
                    <p>
                        <i className="fa fa-info-circle me-2"></i>
                        Your profile information is secure and will only be used for account management.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default User_profile;
