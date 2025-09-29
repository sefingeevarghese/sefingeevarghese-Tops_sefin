import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminSidebar from './Component/AdminSidebar';

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
      const res = await axios.get('/categories');
      setCategories(res.data);
    } catch (err) {
      setCategories([]);
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandel = async (e) => {
    e.preventDefault();
    await axios.post('https://plumcake-bc095-default-rtdb.firebaseio.com/products.json', data);
    setData({ name: '', category: '', image: '', price: '', description: '', stock: '', status: 'InStock' });
    alert('Product added!');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Add Product</h1>
          </div>
          <form onSubmit={submitHandel}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={data.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <select className="form-select" name="category" value={data.category} onChange={handleChange} required>
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.name}>{cat.name}</option>
                ))}
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input type="text" className="form-control" name="image" value={data.image} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input type="number" className="form-control" name="price" value={data.price} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" name="description" value={data.description} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Stock</label>
              <input type="number" className="form-control" name="stock" value={data.stock} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label className="form-label">Status</label>
              <select className="form-select" name="status" value={data.status} onChange={handleChange}>
                <option value="InStock">In Stock</option>
                <option value="OutOfStock">Out of Stock</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add_product;