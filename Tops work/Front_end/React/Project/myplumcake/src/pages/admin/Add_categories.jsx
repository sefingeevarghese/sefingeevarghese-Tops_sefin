import React, { useState } from 'react';
import AdminLayout from './Component/AdminLayout';
import { toast } from 'react-toastify';
import axios from 'axios';

function Add_categories() {
  const [data, setData] = useState({
    name: '',
    description: '',
    image: ''
  });
  const [loading, setLoading] = useState(false);

  const submitHandel = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log('Submitting category data:', data);
      const response = await axios.post('http://localhost:3001/categories', {
        ...data,
        id: Date.now().toString()
      });
      
      console.log('Category added successfully:', response.data);
      setData({ name: '', description: '', image: '' });
      toast.success('Category added successfully!');
    } catch (error) {
      console.error('Error adding category:', error);
      toast.error(`Error adding category: ${error.message}. Please try again.`);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <i className="bi bi-plus-circle me-2 text-primary"></i>
          Add Category
        </h1>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/admin/dashboard">Dashboard</a></li>
            <li className="breadcrumb-item active" aria-current="page">Add Category</li>
          </ol>
        </nav>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className="bi bi-folder-plus me-2"></i>
                Category Information
              </h5>
            </div>
            <div className="card-body">
              <form onSubmit={submitHandel}>
                <div className="mb-3">
                  <label className="form-label fw-bold">Category Name *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="name" 
                    value={data.name} 
                    onChange={handleInputChange} 
                    placeholder="Enter category name"
                    required 
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-bold">Description</label>
                  <textarea 
                    className="form-control" 
                    name="description" 
                    value={data.description} 
                    onChange={handleInputChange}
                    rows="3"
                    placeholder="Enter category description"
                  />
                </div>
                
                <div className="mb-3">
                  <label className="form-label fw-bold">Image URL</label>
                  <input 
                    type="url" 
                    className="form-control" 
                    name="image" 
                    value={data.image} 
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                  />
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
                
                <div className="d-flex gap-2">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={loading || !data.name.trim()}
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                        Adding...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-check2 me-2"></i>
                        Add Category
                      </>
                    )}
                  </button>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => setData({ name: '', description: '', image: '' })}
                  >
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
                  Category name is required
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Description helps customers understand the category
                </li>
                <li className="mb-2">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Use high-quality images for better appearance
                </li>
                <li className="mb-0">
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Image URL should be publicly accessible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}

export default Add_categories;
