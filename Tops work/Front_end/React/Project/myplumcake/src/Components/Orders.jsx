import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './Orders.css';

function Orders() {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in
        const userId = localStorage.getItem('u_id');
        if (!userId) {
            navigate('/login');
            return;
        }

        fetchOrders(userId);
    }, [navigate]);

    const fetchOrders = async (userId) => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:3001/orders');
            // Filter orders by current user
            const userOrders = response.data.filter(order => order.userId === userId);
            setOrders(userOrders);
        } catch (error) {
            console.error('Error fetching orders:', error);
            toast.error('Failed to load orders');
            setOrders([]);
        } finally {
            setLoading(false);
        }
    };

    const getStatusBadge = (status) => {
        const statusClasses = {
            'pending': 'badge bg-warning text-dark',
            'processing': 'badge bg-info',
            'shipped': 'badge bg-primary',
            'delivered': 'badge bg-success',
            'cancelled': 'badge bg-danger'
        };
        return <span className={statusClasses[status] || 'badge bg-secondary'}>{status || 'Unknown'}</span>;
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="orders-container">
                <div className="orders-loading">
                    <div className="loading-spinner"></div>
                    <p>Loading your orders...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="orders-container">
            <div className="orders-box">
                <div className="orders-header">
                    <h2>My Orders</h2>
                    <p>Track your order history and status</p>
                </div>

                {orders.length === 0 ? (
                    <div className="no-orders">
                        <div className="no-orders-icon">
                            <i className="fa fa-shopping-bag"></i>
                        </div>
                        <h3>No Orders Yet</h3>
                        <p>You haven't placed any orders yet. Start shopping to see your orders here!</p>
                        <button 
                            className="btn btn-primary"
                            onClick={() => navigate('/')}
                        >
                            <i className="fa fa-shopping-cart me-2"></i>
                            Start Shopping
                        </button>
                    </div>
                ) : (
                    <div className="orders-list">
                        {orders.map((order) => (
                            <div key={order.id} className="order-item">
                                <div className="order-header">
                                    <div className="order-info">
                                        <h4>Order #{order.id}</h4>
                                        <p className="order-date">{formatDate(order.date)}</p>
                                    </div>
                                    <div className="order-status">
                                        {getStatusBadge(order.status)}
                                    </div>
                                </div>
                                <div className="order-items">
                                    {order.items && order.items.map((item, index) => (
                                        <div key={index} className="order-product">
                                            <img 
                                                src={item.image || 'img/cat-1.jpg'} 
                                                alt={item.name}
                                                className="product-image"
                                            />
                                            <div className="product-details">
                                                <h6>{item.name}</h6>
                                                <p className="product-category">{item.category}</p>
                                                <p className="product-price">₹{parseFloat(item.price).toFixed(2)} x {item.quantity}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="order-footer">
                                    <div className="order-total">
                                        <strong>Total: ₹{parseFloat(order.total).toFixed(2)}</strong>
                                    </div>
                                    <div className="order-actions">
                                        {order.status === 'pending' && (
                                            <button className="btn btn-sm btn-outline-danger">Cancel Order</button>
                                        )}
                                        <button className="btn btn-sm btn-primary">View Details</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className="orders-footer">
                    <p>
                        <i className="fa fa-info-circle me-2"></i>
                        Order history and tracking information will appear here once you place an order.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Orders;
