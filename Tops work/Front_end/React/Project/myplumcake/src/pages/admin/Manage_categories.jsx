import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminLayout from './Component/AdminLayout';

function Manage_categories() {
  const [mydata, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [editCategory, setEditCategory] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', description: '', image: '' });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      setLoading(true);
      const res = await axios.get('http://localhost:3001/categories');
      const data = res.data;
      if (data) {
        setData(data);
      } else {
        setData([]);
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
      toast.error('Error loading categories');
      setData([]);
    } finally {
      setLoading(false);
    }
  };
  
  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3001/products');
      const data = res.data;
      if (data) {
        setProducts(data);
      } else {
        setProducts([]);
      }
    } catch (err) {
      console.error('Error fetching products:', err);
      setProducts([]);
    }
  };

  const handleEditClick = (category) => {
    setEditCategory(category);
    setEditForm({
      name: category.name || '',
      description: category.description || '',
      image: category.image || ''
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3001/categories/${editCategory.id}`,
        { ...editForm, id: editCategory.id }
      );
      setEditCategory(null);
      toast.success('Category updated successfully!');
      fetchCategories();
    } catch (error) {
      console.error('Error updating category:', error);
      toast.error('Error updating category');
    }
  };

  const handleEditCancel = () => {
    setEditCategory(null);
  };

  const deleteHandel = async (id, categoryName) => {
    if (window.confirm(`Are you sure you want to delete the category "${categoryName}"?`)) {
      try {
        await axios.delete(
          `http://localhost:3001/categories/${id}`
        );
        toast.success('Category deleted successfully!');
        fetchCategories();
      } catch (error) {
        console.error('Error deleting category:', error);
        toast.error('Error deleting category');
      }
    }
  };

  // Helper to count products in a category
  const getProductCount = (categoryName) => {
    if (!categoryName) return 0;
    return products.filter(p => p.category === categoryName).length;
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="d-flex justify-content-center align-items-center" style={{ height: '400px' }}>
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <i className="bi bi-list-ul me-2 text-primary"></i>
          Manage Categories
        </h1>
        <div className="d-flex gap-2">
          <Link to="/admin/add-categories" className="btn btn-primary">
            <i className="bi bi-plus-circle me-2"></i>
            Add New Category
          </Link>
          <button 
            className="btn btn-outline-secondary"
            onClick={() => { fetchCategories(); fetchProducts(); }}
          >
            <i className="bi bi-arrow-clockwise me-2"></i>
            Refresh
          </button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">
          <h5 className="card-title mb-0">
            <i className="bi bi-table me-2"></i>
            Categories List
            <span className="badge bg-primary ms-2">{mydata.length} total</span>
          </h5>
        </div>
        <div className="card-body">
          {mydata.length === 0 ? (
            <div className="text-center py-5">
              <i className="bi bi-folder-x" style={{ fontSize: '4rem', color: '#6c757d' }}></i>
              <h4 className="text-muted mt-3">No Categories Found</h4>
              <p className="text-muted">Get started by adding your first category.</p>
              <Link to="/admin/add-categories" className="btn btn-primary">
                <i className="bi bi-plus-circle me-2"></i>
                Add First Category
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
                    <th>Description</th>
                    <th>Products</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {mydata.map((category, index) => (
                    <tr key={category.id}>
                      <td>#{index + 1}</td>
                      <td>
                        {category.image ? (
                          <img 
                            src={category.image} 
                            alt={category.name || ''} 
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
                            display: category.image ? 'none' : 'flex'
                          }}
                        >
                          <i className="bi bi-image text-muted"></i>
                        </div>
                      </td>
                      <td><strong>{category.name || '-'}</strong></td>
                      <td>{category.description || <span className="text-muted">No description</span>}</td>
                      <td>
                        <span className="badge bg-info">
                          {getProductCount(category.name)} products
                        </span>
                      </td>
                      <td>
                        <div className="btn-group" role="group">
                          <button 
                            className="btn btn-sm btn-outline-primary" 
                            onClick={() => handleEditClick(category)}
                            title="Edit Category"
                          >
                            <i className="bi bi-pencil"></i>
                          </button>
                          <button 
                            className="btn btn-sm btn-outline-danger" 
                            onClick={() => deleteHandel(category.id, category.name)}
                            title="Delete Category"
                          >
                            <i className="bi bi-trash"></i>
                          </button>
                        </div>
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
      {editCategory && (
        <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  <i className="bi bi-pencil me-2"></i>
                  Edit Category
                </h5>
                <button type="button" className="btn-close" onClick={handleEditCancel}></button>
              </div>
              <form onSubmit={handleEditSubmit}>
                <div className="modal-body">
                  <div className="mb-3">
                    <label className="form-label fw-bold">Name *</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="name" 
                      value={editForm.name} 
                      onChange={handleEditChange} 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Description</label>
                    <textarea 
                      className="form-control" 
                      name="description" 
                      value={editForm.description} 
                      onChange={handleEditChange}
                      rows="3"
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Image URL</label>
                    <input 
                      type="url" 
                      className="form-control" 
                      name="image" 
                      value={editForm.image} 
                      onChange={handleEditChange} 
                    />
                    {editForm.image && (
                      <div className="mt-2">
                        <small className="text-muted">Preview:</small>
                        <div className="mt-1">
                          <img 
                            src={editForm.image} 
                            alt="Preview" 
                            className="img-thumbnail" 
                            style={{ maxWidth: '200px', maxHeight: '150px' }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleEditCancel}>
                    <i className="bi bi-x-circle me-2"></i>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-check2 me-2"></i>
                    Save Changes
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

export default Manage_categories;