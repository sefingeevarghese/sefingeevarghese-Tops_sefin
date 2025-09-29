import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productSlice';

const AddProductForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    productName: '',
    price: '',
    offerPrice: '',
    photo: '',
    qty: 1,
    description: ''
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' || name === 'offerPrice' || name === 'qty' 
        ? Number(value) || value 
        : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.productName.trim()) {
      newErrors.productName = 'Product name is required';
    }
    
    if (!formData.price || formData.price <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }
    
    if (!formData.offerPrice || formData.offerPrice <= 0) {
      newErrors.offerPrice = 'Offer price must be greater than 0';
    }
    
    if (formData.offerPrice > formData.price) {
      newErrors.offerPrice = 'Offer price cannot be greater than regular price';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.photo.trim()) {
      newErrors.photo = 'Photo URL is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      dispatch(addProduct(formData));
      setFormData({
        productName: '',
        price: '',
        offerPrice: '',
        photo: '',
        qty: 1,
        description: ''
      });
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Add New Product</h2>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        
        <form onSubmit={handleSubmit} className="product-form">
          <div className="form-group">
            <label htmlFor="productName">Product Name *</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleInputChange}
              className={errors.productName ? 'error' : ''}
            />
            {errors.productName && <span className="error-text">{errors.productName}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="price">Price (₹) *</label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className={errors.price ? 'error' : ''}
              />
              {errors.price && <span className="error-text">{errors.price}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="offerPrice">Offer Price (₹) *</label>
              <input
                type="number"
                id="offerPrice"
                name="offerPrice"
                value={formData.offerPrice}
                onChange={handleInputChange}
                min="0"
                step="0.01"
                className={errors.offerPrice ? 'error' : ''}
              />
              {errors.offerPrice && <span className="error-text">{errors.offerPrice}</span>}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="photo">Photo URL *</label>
            <input
              type="url"
              id="photo"
              name="photo"
              value={formData.photo}
              onChange={handleInputChange}
              placeholder="https://example.com/image.jpg"
              className={errors.photo ? 'error' : ''}
            />
            {errors.photo && <span className="error-text">{errors.photo}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="qty">Quantity</label>
            <input
              type="number"
              id="qty"
              name="qty"
              value={formData.qty}
              onChange={handleInputChange}
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="3"
              className={errors.description ? 'error' : ''}
            />
            {errors.description && <span className="error-text">{errors.description}</span>}
          </div>

          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">
              Cancel
            </button>
            <button type="submit" className="btn-submit">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;