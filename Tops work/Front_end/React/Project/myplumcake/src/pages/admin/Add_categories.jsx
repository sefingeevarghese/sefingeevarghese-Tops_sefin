import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AdminHeader from './Component/AdminHeader';
import AdminFooter from './Component/AdminFooter';
import AdminSidebar from './Component/AdminSidebar';
import axios from 'axios';

function Add_categories() {
  const redirect = useNavigate();
  const [data, setData] = useState({
    name: '',
    description: '',
    image: ''
  });

  const submitHandel = async (e) => {
    e.preventDefault();
    await axios.post('https://plumcake-bc095-default-rtdb.firebaseio.com/categories.json', data);
    setData({ name: '', description: '', image: '' });
    alert('Category added!');
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <AdminSidebar />
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">Add Category</h1>
          </div>
          <form onSubmit={submitHandel}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={data.name} onChange={e => setData({ ...data, name: e.target.value })} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Description</label>
              <input type="text" className="form-control" name="description" value={data.description} onChange={e => setData({ ...data, description: e.target.value })} />
            </div>
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input type="text" className="form-control" name="image" value={data.image} onChange={e => setData({ ...data, image: e.target.value })} />
            </div>
            <button type="submit" className="btn btn-primary">Add Category</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Add_categories;
