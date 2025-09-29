import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    updateQuantity(productId, newQuantity);
  };

  const handleCheckout = async () => {
    const userId = localStorage.getItem('u_id');
    const userName = localStorage.getItem('u_name');
    const userEmail = localStorage.getItem('u_email');

    if (!userId) {
      toast.warning('Please log in to place an order');
      navigate('/login');
      return;
    }

    if (cart.items.length === 0) {
      toast.warning('Your cart is empty');
      return;
    }

    try {
      const orderData = {
        id: Date.now().toString(),
        userId,
        customerName: userName,
        customerEmail: userEmail,
        items: cart.items,
        total: cart.totalAmount,
        status: 'pending',
        date: new Date().toISOString()
      };

      await axios.post('http://localhost:3001/orders', orderData);
      clearCart();
      toast.success('Order placed successfully!');
      navigate('/orders');
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('Failed to place order. Please try again.');
    }
  };

  if (cart.items.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-box">
          <div className="cart-header">
            <h2>Shopping Cart</h2>
            <p>Your cart is currently empty</p>
          </div>
          <div className="empty-cart">
            <div className="empty-cart-icon">
              <i className="fa fa-shopping-cart"></i>
            </div>
            <h3>Your cart is empty</h3>
            <p>Add some delicious plum cakes to get started!</p>
            <button 
              className="btn btn-primary"
              onClick={() => navigate('/services')}
            >
              <i className="fa fa-cake me-2"></i>
              Browse Cakes
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <div className="cart-box">
        <div className="cart-header">
          <h2>Shopping Cart</h2>
          <p>Review your items before checkout</p>
        </div>

        <div className="cart-items">
          {cart.items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img 
                  src={item.image || 'img/cat-1.jpg'} 
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = 'img/cat-1.jpg';
                  }}
                />
              </div>
              <div className="item-details">
                <h4>{item.name}</h4>
                <p className="item-category">{item.category}</p>
                <p className="item-price">₹{parseFloat(item.price).toFixed(2)}</p>
              </div>
              <div className="quantity-controls">
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <span className="quantity">{item.quantity}</span>
                <button 
                  className="quantity-btn"
                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
              <div className="item-total">
                <p>₹{(parseFloat(item.price) * item.quantity).toFixed(2)}</p>
              </div>
              <div className="item-actions">
                <button 
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div className="summary-row">
            <span>Total Items:</span>
            <span>{cart.totalItems}</span>
          </div>
          <div className="summary-row total">
            <span>Total Amount:</span>
            <span>₹{cart.totalAmount.toFixed(2)}</span>
          </div>
        </div>

        <div className="cart-actions">
          <button 
            className="btn btn-secondary"
            onClick={() => navigate('/services')}
          >
            <i className="fa fa-arrow-left me-2"></i>
            Continue Shopping
          </button>
          <button 
            className="btn btn-danger"
            onClick={clearCart}
          >
            <i className="fa fa-trash me-2"></i>
            Clear Cart
          </button>
          <button 
            className="btn btn-success"
            onClick={handleCheckout}
          >
            <i className="fa fa-credit-card me-2"></i>
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;