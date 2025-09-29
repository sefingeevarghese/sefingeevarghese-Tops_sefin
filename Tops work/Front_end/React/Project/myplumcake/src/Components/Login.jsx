import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import swal from 'sweetalert';
import './Login.css';

function Login() {
    const redirect = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const [formdata, setFormdata] = useState({
        email: "",
        password: ""
    });

    const changeHandel = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
        setError(''); // Clear error when user types
    }

    function validation() {
        let ans = true;

        if (formdata.email === "") {
            toast.error('Email Field is required');
            ans = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formdata.email)) {
            toast.error('Please enter a valid email address');
            ans = false;
        }
        
        if (formdata.password === "") {
            toast.error('Password Field is required');
            ans = false;
        }

        return ans;
    }
    
    const submitHandel = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        
        if (validation()) {
            try {
                const res = await axios.get(`http://localhost:3001/user?email=${encodeURIComponent(formdata.email.trim())}`);
                if (res.data.length > 0) {
                    if (formdata.password === res.data[0].password) {
                        if (res.data[0].status === "Unblock") {
                            localStorage.setItem('u_id', res.data[0].id);
                            localStorage.setItem('u_name', res.data[0].name);
                            localStorage.setItem('u_email', res.data[0].email);
                            if (res.data[0].mobile) localStorage.setItem('u_mobile', res.data[0].mobile);
                            // Set admin status based on database value, default to false for regular users
                            const isAdmin = res.data[0].isAdmin === true;
                            localStorage.setItem('isAdmin', isAdmin.toString());
                            localStorage.setItem('loginTime', Date.now().toString());
                            // Notify other components (e.g., Header) about login state change
                            window.dispatchEvent(new Event('loginStateChanged'));
                            swal("Good job!", "Login Success!", "success");
                            redirect('/');
                        }
                        else {
                            setError('Your account has been blocked. Please contact support.');
                            swal("Error", "Blocked Account!", "error");
                        }
                    }
                    else {
                        setError('Incorrect password. Please try again.');
                        swal("Error", "Wrong Password!", "error");
                    }
                }
                else {
                    setError('No account found with this email. Please sign up first.');
                    swal("Error", "Email does not exist! ", "error");
                }
            } catch (err) {
                console.error('Login error:', err);
                setError('Login failed. Please check your connection and try again.');
                toast.error('Login failed. Please try again.');
            }
        }
        setLoading(false);
    }

    return (
        <div className="auth-container">
            <div className="auth-box">
                <div className="auth-header">
                    <h2>Welcome Back</h2>
                    <p>Login to your Plum Cake Bliss account</p>
                </div>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={submitHandel} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formdata.email}
                            onChange={changeHandel}
                            placeholder="Enter your email"
                            className="form-input"
                            disabled={loading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formdata.password}
                            onChange={changeHandel}
                            placeholder="Enter your password"
                            className="form-input"
                            disabled={loading}
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="submit-btn"
                        disabled={loading}
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <div className="auth-footer">
                    <p>
                        Don't have an account?{' '}
                        <Link to="/signup" className="toggle-btn">
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;