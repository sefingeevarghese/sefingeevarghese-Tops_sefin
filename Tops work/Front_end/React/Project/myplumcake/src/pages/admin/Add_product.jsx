import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminLayout from './Component/AdminLayout';

function Add_product() {
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState({
    name: '',
    category: '',
    image: '',
    price: '',
    description: '',
    stock: '',
    status: 'InStock'
  });
  const redirect = useNavigate();

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:3001/categories');
      const data = res.data;
      if (data) {
        setCategories(data);
      } else {
        setCategories([]);
      }
    } catch (err) {
      setCategories([]);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandel = async (e) => {
    e.preventDefault();
    try {
      const productData = {
        ...data,
        id: Date.now().toString()
      };
      await axios.post('http://localhost:3001/products', productData);
      setData({ name: '', category: '', image: '', price: '', description: '', stock: '', status: 'InStock' });
      toast.success('Product added successfully!');
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Error adding product');
    }
  };

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <i className="bi bi-plus-circle me-2 text-primary"></i>
          Add Product
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/admin/dashboard">Dashboard</a></li>
            <li className="breadcrumb-item active" aria-current="page">Add Product</li>
          </ol>
        </nav>
      </div>
      
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className="bi bi-box me-2"></i>
                Product Information
              </h5>
            </div>
            <div className="card-body">
              <form onSubmit={submitHandel}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Product Name *</label>
                  <input type="text" className="form-control" name="name" value={data.name} onChange={handleChange} placeholder="Enter product name" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Category *</label>
                  <select className="form-select" name="category" value={data.category} onChange={handleChange} required>
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Image URL</label>
                  <input type="url" className="form-control" name="image" value={data.image} onChange={handleChange} placeholder="https://example.com/image.jpg" />
                  {data.image && (
                    <div className="mt-2">
                      <small className="text-muted">Preview:</small>
                      <div className="mt-1">
                        <img 
                          src={data.image} 
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
                <div className="mb-3">
                  <label className="form-label fw-bold">Price (₹) *</label>
                  <input type="number" className="form-control" name="price" value={data.price} onChange={handleChange} placeholder="Enter price in rupees" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Description</label>
                  <textarea className="form-control" name="description" value={data.description} onChange={handleChange} rows="3" placeholder="Enter product description" />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Stock Quantity *</label>
                  <input type="number" className="form-control" name="stock" value={data.stock} onChange={handleChange} placeholder="Enter stock quantity" required />
                </div>
                <div className="mb-3">
                  <label className="form-label fw-bold">Status</label>
                  <select className="form-select" name="status" value={data.status} onChange={handleChange}>
                    <option value="InStock">In Stock</option>
                    <option value="OutOfStock">Out of Stock</option>
                  </select>
                </div>
                <div className="d-flex gap-2">
                  <button type="submit" className="btn btn-primary">
                    <i className="bi bi-check2 me-2"></i>
                    Add Product
                  </button>
                  <button type="button" className="btn btn-secondary" onClick={() => setData({ name: '', category: '', image: '', price: '', description: '', stock: '', status: 'InStock' })}>
                    <i className="bi bi-arrow-clockwise me-2"></i>
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className="bi bi-info-circle me-2"></i>
                Instructions
              </h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Product name and category are required
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Price should be in Indian Rupees (₹)
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Stock quantity helps track inventory
                </li>
                <li className="mb-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Use high-quality product images
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Add_product;