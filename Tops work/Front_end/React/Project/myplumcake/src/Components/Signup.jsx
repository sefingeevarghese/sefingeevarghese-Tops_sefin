import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import './Signup.css';

function Signup() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formdata, setFormdata] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: "",
        status: "Unblock"
    });

    // Note: Authentication check is now handled by User_before_auth component
    // This useEffect has been removed to prevent conflicts

    const changeHandel = (e) => {
        setFormdata({ 
            ...formdata, 
            id: new Date().getTime().toString(), 
            [e.target.name]: e.target.value 
        });
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
        
        if (formdata.password === "") {
            toast.error('Password Field is required');
            ans = false;
        } else if (formdata.password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            ans = false;
        }
        
        if (formdata.confirmPassword === "") {
            toast.error('Confirm Password Field is required');
            ans = false;
        } else if (formdata.password !== formdata.confirmPassword) {
            toast.error('Passwords do not match');
            ans = false;
        }
        
        if (formdata.mobile.trim() === "") {
            toast.error('Mobile Field is required');
            ans = false;
        } else if (!/^\d{10}$/.test(formdata.mobile.trim())) {
            toast.error('Please enter a valid 10-digit mobile number');
            ans = false;
        }
        
        return ans;
    }

    const checkEmailExists = async (email) => {
        try {
            const response = await axios.get(`http://localhost:3001/user?email=${encodeURIComponent(email.trim())}`);
            return response.data.length > 0;
        } catch (error) {
            console.error('Error checking email:', error);
            return false;
        }
    };

    const submitHandel = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (validation()) {
            try {
                // Skip email existence check to allow all users to sign up
                // Create user object without confirmPassword
                const userData = {
                    id: formdata.id,
                    name: formdata.name.trim(),
                    email: formdata.email.trim(),
                    password: formdata.password,
                    mobile: formdata.mobile.trim(),
                    status: "Unblock",
                    isAdmin: false // Regular users don't get admin access
                };

                const res = await axios.post('http://localhost:3001/user', userData);

                // Auto-login the user after successful signup
                localStorage.setItem('u_id', res.data.id);
                localStorage.setItem('u_name', res.data.name);
                localStorage.setItem('u_email', res.data.email);
                localStorage.setItem('u_mobile', res.data.mobile || '');
                localStorage.setItem('isAdmin', 'false'); // Regular users are not admins
                localStorage.setItem('loginTime', Date.now().toString());

                // Notify header/auth listeners
                window.dispatchEvent(new Event('loginStateChanged'));

                swal({
                    title: "Welcome to MyPlumCake!",
                    text: "Account created successfully! You can now explore our delicious plum cakes.",
                    icon: "success",
                    button: "Get Started",
                }).then(() => {
                    navigate('/');
                });
                
                // Reset form
                setFormdata({
                    id: "",
                    name: "",
                    email: "",
                    password: "",
                    confirmPassword: "",
                    mobile: "",
                    status: "Unblock"
                });
                
            } catch (error) {
                console.error('Signup error:', error);
                setError('Signup failed. Please check your connection and try again.');
                toast.error('Signup failed. Please try again.');
            }
        }
        setLoading(false);
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="auth-header">
                    <h2>Create Account</h2>
                    <p>Join Plum Cake Bliss and start your sweet journey!</p>
                </div>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={submitHandel} className="auth-form">
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formdata.name}
                            onChange={changeHandel}
                            className="form-input"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formdata.email}
                            onChange={changeHandel}
                            className="form-input"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formdata.password}
                            onChange={changeHandel}
                            className="form-input"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formdata.confirmPassword}
                            onChange={changeHandel}
                            className="form-input"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            value={formdata.mobile}
                            onChange={changeHandel}
                            className="form-input"
                            disabled={loading}
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="submit-btn" 
                        disabled={loading}
                    >
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Already have an account?{' '}
                        <Link to="/login" className="toggle-btn">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
