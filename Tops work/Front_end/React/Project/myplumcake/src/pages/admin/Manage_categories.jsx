import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from './Component/AdminSidebar';

function Manage_categories() {
  const [mydata, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [editCategory, setEditCategory] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', description: '', image: '' });

  useEffect(() => {
    fetchCategories();
    fetchProducts();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('https://plumcake-bc095-default-rtdb.firebaseio.com/categories.json');
      const data = res.data;
      if (data) {
        const categoriesWithId = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        }));
        setData(categoriesWithId);
      } else {
        setData([]);
      }
    } catch (err) {
      setData([]);
    }
  };
  
  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://plumcake-bc095-default-rtdb.firebaseio.com/products.json');
      const data = res.data;
      if (data) {
        const productsWithId = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        }));
        setProducts(productsWithId);
      } else {
        setProducts([]);
      }
    } catch (err) {
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
    await axios.patch(
      `https://plumcake-bc095-default-rtdb.firebaseio.com/categories/${editCategory.id}.json`,
      editForm
    );
    setEditCategory(null);
    fetchCategories();
  };

  const handleEditCancel = () => {
    setEditCategory(null);
  };

  const deleteHandel = async (id) => {
    await axios.delete(
      `https://plumcake-bc095-default-rtdb.firebaseio.com/categories/${id}.json`
    );
    fetchCategories();
  };

  // Helper to count products in a category
  const getProductCount = (categoryName) => {
    if (!categoryName) return 0;
    return products.filter(p => p.category === categoryName).length;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Manage Categories</h1>
            <Link to="/add_categories" className="btn btn-primary">
              <i className="bi bi-plus-circle me-2"></i>
              Add New Category
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
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
                {mydata.length === 0 ? (
                  <tr><td colSpan="6" className="text-center">No categories found.</td></tr>
                ) : mydata.map((category) => (
                  <tr key={category.id}>
                    <td>{category.id || '-'}</td>
                    <td>{category.image ? <img src={category.image} alt={category.name || ''} style={{ width: '50px', height: '50px', objectFit: 'cover' }} /> : '-'}</td>
                    <td>{category.name || '-'}</td>
                    <td>{category.description || '-'}</td>
                    <td>{getProductCount(category.name)}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditClick(category)}>
                        <i className="bi bi-pencil"></i> Edit
                      </button>
                      <button className="btn btn-sm btn-danger" onClick={() => deleteHandel(category.id)}>
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Edit Modal */}
          {editCategory && (
            <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Category</h5>
                    <button type="button" className="btn-close" onClick={handleEditCancel}></button>
                  </div>
                  <form onSubmit={handleEditSubmit}>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={editForm.name} onChange={handleEditChange} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Description</label>
                        <input type="text" className="form-control" name="description" value={editForm.description} onChange={handleEditChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Image URL</label>
                        <input type="text" className="form-control" name="image" value={editForm.image} onChange={handleEditChange} />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" onClick={handleEditCancel}>Cancel</button>
                      <button type="submit" className="btn btn-primary">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Manage_categories;