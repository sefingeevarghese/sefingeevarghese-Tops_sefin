import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from './Component/AdminSidebar';

function Manage_product() {
  const [data, setData] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', category: '', price: '', stock: '', image: '' });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://plumcake-bc095-default-rtdb.firebaseio.com/products.json');
      // Firebase returns an object, convert to array with id
      const data = res.data;
      if (data) {
        const productsWithId = Object.entries(data).map(([id, value]) => ({
          id,
          ...value
        }));
        setData(productsWithId);
      } else {
        setData([]);
      }
    } catch (err) {
      setData([]);
    }
  };

  const deleteHandel = async (id) => {
    await axios.delete(`https://plumcake-bc095-default-rtdb.firebaseio.com/products/${id}.json`);
    fetchProducts();
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
    setEditForm({
      name: product.name || '',
      category: product.category || '',
      price: product.price || '',
      stock: product.stock || '',
      image: product.image || ''
    });
  };

  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`https://plumcake-bc095-default-rtdb.firebaseio.com/products/${editProduct.id}.json`, editForm);
    setEditProduct(null);
    fetchProducts();
  };

  const handleEditCancel = () => {
    setEditProduct(null);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Manage Products</h1>
            <Link to="/add_product" className="btn btn-primary">
              <i className="bi bi-plus-circle me-2"></i>
              Add New Product
            </Link>
          </div>
          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
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
                {data.length === 0 ? (
                  <tr><td colSpan="7" className="text-center">No products found.</td></tr>
                ) : data.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id || '-'}</td>
                    <td>
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name || ''}
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                      ) : '-'}
                    </td>
                    <td>{product.name || '-'}</td>
                    <td>{product.category || '-'}</td>
                    <td>{product.price !== undefined && product.price !== null ? `$${product.price}` : '-'}</td>
                    <td>{product.stock !== undefined && product.stock !== null ? product.stock : '-'}</td>
                    <td>
                      <button className="btn btn-sm btn-primary me-2" onClick={() => handleEditClick(product)}>
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
          {/* Edit Modal */}
          {editProduct && (
            <div className="modal show" style={{ display: 'block', background: 'rgba(0,0,0,0.5)' }}>
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Edit Product</h5>
                    <button type="button" className="btn-close" onClick={handleEditCancel}></button>
                  </div>
                  <form onSubmit={handleEditSubmit}>
                    <div className="modal-body">
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" name="name" value={editForm.name} onChange={handleEditChange} required />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Category</label>
                        <input type="text" className="form-control" name="category" value={editForm.category} onChange={handleEditChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Price</label>
                        <input type="number" className="form-control" name="price" value={editForm.price} onChange={handleEditChange} />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Stock</label>
                        <input type="number" className="form-control" name="stock" value={editForm.stock} onChange={handleEditChange} />
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

export default Manage_product;