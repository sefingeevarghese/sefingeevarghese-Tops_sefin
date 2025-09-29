import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../store/productSlice';
import Swal from 'sweetalert2';

const ProductCard = ({ product, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete "${product.productName}"?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProduct(product.id));
        Swal.fire(
          'Deleted!',
          'Product has been deleted.',
          'success'
        );
      }
    });
  };

  const handleImageError = (e) => {
    e.target.src = 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=center';
    e.target.alt = 'Product image not available';
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img 
          src={product.photo} 
          alt={product.productName}
          onError={handleImageError}
        />
      </div>
      
      <div className="product-details">
        <h3 className="product-name">{product.productName}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="price-section">
          <span className="original-price">₹{product.price}</span>
          <span className="offer-price">₹{product.offerPrice}</span>
          <span className="discount">
            {Math.round(((product.price - product.offerPrice) / product.price) * 100)}% OFF
          </span>
        </div>
        
        <div className="product-meta">
          <span className="quantity">Qty: {product.qty}</span>
          <span className="date-added">Added: {product.added_date}</span>
        </div>
        
        <div className="product-actions">
          <button 
            className="btn-edit"
            onClick={() => {
              Swal.fire({
                title: 'Edit Product',
                text: `Do you want to edit "${product.productName}"?`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#6c757d',
                confirmButtonText: 'Yes, edit it!',
                cancelButtonText: 'Cancel'
              }).then((result) => {
                if (result.isConfirmed) {
                  onEdit(product);
                }
              });
            }}
          >
            Edit
          </button>
          <button 
            className="btn-delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;