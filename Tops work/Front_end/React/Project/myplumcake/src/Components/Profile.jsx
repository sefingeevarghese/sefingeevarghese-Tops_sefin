import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import './Profile.css';

function Profile() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [error, setError] = useState('');

    const [formdata, setFormdata] = useState({
        id: "",
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: ""
    });

    useEffect(() => {
        // Check if user is logged in
        const userId = localStorage.getItem('u_id');
        if (!userId) {
            navigate('/login');
            return;
        }

        // Don't fetch data if user is admin (admin doesn't have profile in user table)
        if (userId === 'admin') {
            setFormdata({
                id: 'admin',
                name: 'Admin',
                email: 'admin@gmail.com',
                mobile: 'N/A',
                password: '',
                confirmPassword: ''
            });
            return;
        }

        getData();
    }, [navigate]);

    const getData = async () => {
        try {
            setLoading(true);
            const userId = localStorage.getItem('u_id');
            const res = await axios.get(`http://localhost:3001/user/${userId}`);
            setFormdata({
                ...res.data,
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error('Error fetching profile data:', error);
            toast.error('Failed to load profile data');
        } finally {
            setLoading(false);
        }
    };

    const changeHandel = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
        setError(''); // Clear error when user types
    };

    function validation() {
        let ans = true;
        
        if (formdata.name.trim() === "") {
            toast.error('Name Field is required');
            ans = false;
        } else if (formdata.name.trim().length < 2) {
            toast.error('Name must be at least 2 characters long');
            ans = false;
        }
        
        if (formdata.email.trim() === "") {
            toast.error('Email Field is required');
            ans = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.email)) {
            toast.error('Please enter a valid email address');
            ans = false;
        }
        
        if (formdata.mobile.trim() === "") {
            toast.error('Mobile Field is required');
            ans = false;
        } else if (!/^\d{10}$/.test(formdata.mobile.trim())) {
            toast.error('Please enter a valid 10-digit mobile number');
            ans = false;
        }

        // Only validate password if user is editing and has entered a password
        if (isEditing && formdata.password !== "") {
            if (formdata.password.length < 6) {
                toast.error('Password must be at least 6 characters long');
                ans = false;
            }
            
            if (formdata.password !== formdata.confirmPassword) {
                toast.error('Passwords do not match');
                ans = false;
            }
        }
        
        return ans;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (validation()) {
            try {
                const userId = localStorage.getItem('u_id');
                
                // Prepare data for update (exclude password fields if password is empty)
                const updateData = {
                    name: formdata.name.trim(),
                    email: formdata.email.trim(),
                    mobile: formdata.mobile.trim()
                };

                // Only include password if user provided one
                if (formdata.password !== "") {
                    updateData.password = formdata.password;
                }

                const res = await axios.patch(`http://localhost:3001/user/${userId}`, updateData);
                console.log('Profile updated:', res.data);
                
                // Update localStorage with new data
                localStorage.setItem('u_name', formdata.name.trim());
                localStorage.setItem('u_email', formdata.email.trim());
                localStorage.setItem('u_mobile', formdata.mobile.trim());
                
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
                setFormdata(prev => ({
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

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleCancel = () => {
        setIsEditing(false);
        // Reset form data to original values
        getData();
    };

    if (loading && !isEditing) {
        return (
            <div className="profile-container">
                <div className="profile-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading profile...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="profile-container">
            <div className="profile-box">
                <div className="profile-header">
                    <h2>My Profile</h2>
                    <p>Manage your account information</p>
                </div>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={submitHandel} className="profile-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formdata.name}
                            onChange={changeHandel}
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
                            value={formdata.email}
                            onChange={changeHandel}
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
                            value={formdata.mobile}
                            onChange={changeHandel}
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
                                    value={formdata.password}
                                    onChange={changeHandel}
                                    className="form-input"
                                    disabled={loading}
                                    placeholder="Leave blank to keep current password"
                                />
                            </div>

                            {formdata.password && (
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm New Password</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formdata.confirmPassword}
                                        onChange={changeHandel}
                                        className="form-input"
                                        disabled={loading}
                                        placeholder="Confirm your new password"
                                    />
                                </div>
                            )}
                        </>
                    )}

                    <div className="profile-actions">
                        {!isEditing ? (
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleEdit}
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

                <div className="profile-footer">
                    <p>
                        <i className="fa fa-info-circle me-2"></i>
                        Your profile information is secure and will only be used for account management.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Profile;
