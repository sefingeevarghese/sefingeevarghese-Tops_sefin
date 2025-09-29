import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminLayout from './Component/AdminLayout';

function Manage_product() {
  const [data, setData] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', category: '', price: '', stock: '', image: '', description: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3001/products');
      const data = res.data;
      if (data) {
        setData(data);
      } else {
        setData([]);
      }
    } catch (err) {
      setData([]);
    }
  };

  const deleteHandel = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await axios.delete(`http://localhost:3001/products/${id}`);
        toast.success('Product deleted successfully!');
        fetchProducts();
      } catch (error) {
        console.error('Error deleting product:', error);
        toast.error('Error deleting product');
      }
    }
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
    setEditForm({
      name: product.name || '',
      category: product.category || '',
      price: product.price || '',
      stock: product.stock || '',
      image: product.image || '',
      description: product.description || ''
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/products/${editProduct.id}`, { ...editForm, id: editProduct.id });
      toast.success('Product updated successfully!');
      setEditProduct(null);
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
      toast.error('Error updating product');
    }
  };

  const handleEditCancel = () => {
    setEditProduct(null);
  };

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <i className="bi bi-box me-2 text-primary"></i>
          Manage Products
        </h1>
        <Link to="/admin/add-product" className="btn btn-primary">
          <i className="bi bi-plus-circle me-2"></i>
          Add New Product
        </Link>
      </div>
      
      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">
            <i className="bi bi-table me-2"></i>
            Products List
            <span className="badge bg-primary ms-2">{data.length} total</span>
          </h5>
        </div>
        <div className="card-body">
          {data.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-box-seam" style={{ fontSize: '4rem', color: '#6c757d' }}></i>
              <h4 className="text-muted mt-3">No Products Found</h4>
              <p className="text-muted">Get started by adding your first product.</p>
              <Link to="/admin/add-product" className="btn btn-primary">
                <i className="bi bi-plus-circle me-2"></i>
                Add First Product
              </Link>
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((product, index) => (
                    <tr key={product.id}>
                      <td>#{index + 1}</td>
                      <td>
                        {product.image ? (
                          <img
                            src={product.image}
                            alt={product.name || ''}
                            className="rounded"
                            style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'block';
                            }}
                          />
                        ) : null}
                        <div 
                          className="bg-light d-flex align-items-center justify-content-center rounded"
                          style={{ 
                            width: '50px', 
                            height: '50px', 
                            display: product.image ? 'none' : 'flex'
                          }}
                        >
                          <i className="bi bi-image text-muted"></i>
                        </div>
                      </td>
                      <td><strong>{product.name || '-'}</strong></td>
                      <td><span className="badge bg-secondary">{product.category || '-'}</span></td>
                      <td><strong className="text-success">{product.price !== undefined && product.price !== null ? `₹${product.price}` : '-'}</strong></td>
                      <td>
                        {product.stock !== undefined && product.stock !== null ? (
                          <span className={`badge ${product.stock <= 5 ? 'bg-danger' : product.stock <= 15 ? 'bg-warning' : 'bg-success'}`}>
                            {product.stock} units
                          </span>
                        ) : '-'}
                      </td>
                      <td>
                        <button className="btn btn-sm btn-warning me-2" onClick={() => handleEditClick(product)}>
                          <i className="bi bi-pencil"></i> Edit
                        </button>
                        <button className="btn btn-sm btn-danger" onClick={() => deleteHandel(product.id)}>
                          <i className="bi bi-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {/* Edit Modal */}
      {editProduct && (
        <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Product</h5>
                <button type="button" className="btn-close" onClick={handleEditCancel}></button>
              </div>
              <form onSubmit={handleEditSubmit}>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold">Product Name *</label>
                        <input type="text" className="form-control" name="name" value={editForm.name} onChange={handleEditChange} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold">Category</label>
                        <input type="text" className="form-control" name="category" value={editForm.category} onChange={handleEditChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold">Price (₹)</label>
                        <input type="number" className="form-control" name="price" value={editForm.price} onChange={handleEditChange} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label fw-bold">Stock Quantity</label>
                        <input type="number" className="form-control" name="stock" value={editForm.stock} onChange={handleEditChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-bold">Image URL</label>
                        <input type="url" className="form-control" name="image" value={editForm.image} onChange={handleEditChange} />
                        {editForm.image && (
                          <div className="mt-2">
                            <img 
                              src={editForm.image} 
                              alt="Preview" 
                              className="img-thumbnail" 
                              style={{ maxWidth: '100px', maxHeight: '75px' }}
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label fw-bold">Description</label>
                        <textarea 
                          className="form-control" 
                          name="description" 
                          value={editForm.description} 
                          onChange={handleEditChange}
                          rows="3"
                          placeholder="Enter product description..."
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleEditCancel}>Cancel</button>
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-check2 me-2"></i>Save Changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}

export default Manage_product;