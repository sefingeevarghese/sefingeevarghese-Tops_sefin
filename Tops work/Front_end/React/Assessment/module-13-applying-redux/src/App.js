import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './store/productSlice';
import AddProductForm from './components/AddProductForm';
import EditProductForm from './components/EditProductForm';
import ProductCard from './components/ProductCard';
import SearchFilter from './components/SearchFilter';
import './styles/App.css';

function App() {
  const dispatch = useDispatch();
  const { filteredItems, loading, error } = useSelector(state => state.products);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  const handleCloseEdit = () => {
    setEditingProduct(null);
  };

  const handleCloseAdd = () => {
    setShowAddForm(false);
  };

  if (loading) {
    return (
      <div className="container">
        <div className="loading">
          <div>Loading products...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>AddToCart Application</h1>
        <p>Manage your products with Redux Toolkit</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="error-message">
          Error: {error}
        </div>
      )}

      {/* Controls */}
      <div className="controls">
        <button 
          className="btn-add"
          onClick={() => setShowAddForm(true)}
        >
          + Add New Product
        </button>
        <SearchFilter />
      </div>

      {/* Products Grid */}
      {filteredItems.length === 0 ? (
        <div className="empty-state">
          <h3>No products found</h3>
          <p>Start by adding some products to your inventory!</p>
        </div>
      ) : (
        <div className="products-grid">
          {filteredItems.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onEdit={handleEdit}
            />
          ))}
        </div>
      )}

      {/* Add Product Modal */}
      {showAddForm && (
        <AddProductForm onClose={handleCloseAdd} />
      )}

      {/* Edit Product Modal */}
      {editingProduct && (
        <EditProductForm 
          product={editingProduct} 
          onClose={handleCloseEdit} 
        />
      )}
    </div>
  );
}

export default App;
