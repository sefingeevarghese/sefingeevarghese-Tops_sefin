import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import AdminLayout from './Component/AdminLayout';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Dashboard() {
  const [stats, setStats] = useState({
    products: 0,
    orders: 0,
    customers: 0,
    contacts: 0,
    categories: 0
  });
  const [recentOrders, setRecentOrders] = useState([]);
  const [recentProducts, setRecentProducts] = useState([]);
  const [recentCustomers, setRecentCustomers] = useState([]);
  const [recentContacts, setRecentContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch all data concurrently
      const [productsRes, ordersRes, customersRes, contactsRes, categoriesRes] = await Promise.all([
        axios.get('http://localhost:3001/products'),
        axios.get('http://localhost:3001/orders'),
        axios.get('http://localhost:3001/user'),
        axios.get('http://localhost:3001/contact'),
        axios.get('http://localhost:3001/categories')
      ]);

      const products = productsRes.data || [];
      const orders = ordersRes.data || [];
      const customers = customersRes.data || [];
      const contacts = contactsRes.data || [];
      const categories = categoriesRes.data || [];

      // Update stats
      setStats({
        products: products.length,
        orders: orders.length,
        customers: customers.length,
        contacts: contacts.length,
        categories: categories.length
      });

      // Set recent data (limit to 5 items each)
      setRecentProducts(products.slice(0, 4));
      setRecentOrders(orders.slice(0, 5));
      setRecentCustomers(customers.slice(-3)); // Last 3 customers
      setRecentContacts(contacts.slice(-3)); // Last 3 contacts

    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      toast.error('Error loading dashboard data');
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      'Completed': 'bg-success',
      'Pending': 'bg-warning text-dark',
      'Cancelled': 'bg-danger',
      'Processing': 'bg-info',
      'Delivered': 'bg-success',
    };
    return <span className={`badge ${statusClasses[status] || 'bg-secondary'}`}>{status}</span>;
  };

  const getStockBadge = (stock) => {
    if (stock <= 5) return <span className="badge bg-danger">Low Stock</span>;
    if (stock <= 15) return <span className="badge bg-warning text-dark">Medium</span>;
    return <span className="badge bg-success">In Stock</span>;
  };

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">
          <i className="bi bi-speedometer2 me-2 text-primary"></i>
          Dashboard
        </h1>
        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={fetchDashboardData}>
              <i className="bi bi-arrow-clockwise me-1"></i>
              Refresh
            </button>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3 text-muted">Loading dashboard data...</p>
        </div>
      ) : (
        <>

      {/* Dashboard Cards */}
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card text-white bg-primary h-100">
            <div className="card-body d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title mb-1">Total Products</h5>
                <p className="card-text display-6 mb-0">{stats.products}</p>
              </div>
              <div className="ms-3">
                <i className="bi bi-box-seam" style={{ fontSize: '3rem', opacity: 0.7 }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success h-100">
            <div className="card-body d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title mb-1">Total Orders</h5>
                <p className="card-text display-6 mb-0">{stats.orders}</p>
              </div>
              <div className="ms-3">
                <i className="bi bi-cart-check" style={{ fontSize: '3rem', opacity: 0.7 }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning h-100">
            <div className="card-body d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title mb-1">Total Customers</h5>
                <p className="card-text display-6 mb-0">{stats.customers}</p>
              </div>
              <div className="ms-3">
                <i className="bi bi-people" style={{ fontSize: '3rem', opacity: 0.7 }}></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-info h-100">
            <div className="card-body d-flex align-items-center">
              <div className="flex-grow-1">
                <h5 className="card-title mb-1">Total Contacts</h5>
                <p className="card-text display-6 mb-0">{stats.contacts}</p>
              </div>
              <div className="ms-3">
                <i className="bi bi-envelope" style={{ fontSize: '3rem', opacity: 0.7 }}></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content Row */}
      <div className="row g-4">
        {/* Recent Products */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">
                <i className="bi bi-box me-2 text-primary"></i>
                Recent Products
              </h5>
              <a href="/admin/manage-products" className="btn btn-sm btn-outline-primary">
                Manage
              </a>
            </div>
            <div className="card-body">
              {recentProducts.length === 0 ? (
                <div className="text-center text-muted py-4">
                  <i className="bi bi-box" style={{ fontSize: '3rem', opacity: 0.3 }}></i>
                  <p className="mt-2 mb-0">No products found</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentProducts.map((product) => (
                    <div key={product.id} className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{product.name}</h6>
                        <small className="text-muted">{product.category}</small>
                      </div>
                      <div className="text-end">
                        <div className="fw-bold">₹{product.price}</div>
                        <div>{getStockBadge(product.stock)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recent Customers */}
        <div className="col-lg-6">
          <div className="card h-100">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">
                <i className="bi bi-people me-2 text-primary"></i>
                Recent Customers
              </h5>
              <a href="/admin/manage-customers" className="btn btn-sm btn-outline-primary">
                View All
              </a>
            </div>
            <div className="card-body">
              {recentCustomers.length === 0 ? (
                <div className="text-center text-muted py-4">
                  <i className="bi bi-people" style={{ fontSize: '3rem', opacity: 0.3 }}></i>
                  <p className="mt-2 mb-0">No customers found</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {recentCustomers.map((customer) => (
                    <div key={customer.id} className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-2">
                      <div className="flex-grow-1">
                        <h6 className="mb-1">{customer.name}</h6>
                        <small className="text-muted">{customer.email}</small>
                      </div>
                      <div className="text-end">
                        <div className="small text-muted">Mobile: {customer.mobile}</div>
                        <div>
                          {customer.status === 'Unblock' ? (
                            <span className="badge bg-success">Active</span>
                          ) : (
                            <span className="badge bg-danger">Blocked</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Recent Contacts Row */}
      <div className="row g-4 mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="card-title mb-0">
                <i className="bi bi-envelope me-2 text-primary"></i>
                Recent Contacts
              </h5>
              <a href="/admin/manage-contacts" className="btn btn-sm btn-outline-primary">
                View All
              </a>
            </div>
            <div className="card-body">
              {recentContacts.length === 0 ? (
                <div className="text-center text-muted py-4">
                  <i className="bi bi-envelope" style={{ fontSize: '3rem', opacity: 0.3 }}></i>
                  <p className="mt-2 mb-0">No contact messages found</p>
                </div>
              ) : (
                <div className="row g-3">
                  {recentContacts.map((contact) => (
                    <div key={contact.id} className="col-md-4">
                      <div className="card border">
                        <div className="card-body p-3">
                          <h6 className="card-title mb-2">{contact.name}</h6>
                          <p className="card-text small text-muted mb-2">{contact.email}</p>
                          <p className="card-text small">
                            <strong>Subject:</strong> {contact.subect || contact.subject || 'N/A'}
                          </p>
                          <p className="card-text small text-truncate" style={{ maxHeight: '40px' }}>
                            {contact.msg || contact.message || 'No message'}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row g-4 mt-4">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">
                <i className="bi bi-lightning me-2 text-primary"></i>
                Quick Actions
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-3">
                  <a href="/admin/add-product" className="btn btn-outline-primary w-100">
                    <i className="bi bi-plus-circle me-2"></i>
                    Add Product
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/admin/add-categories" className="btn btn-outline-success w-100">
                    <i className="bi bi-plus-circle me-2"></i>
                    Add Category
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/admin/manage-customers" className="btn btn-outline-info w-100">
                    <i className="bi bi-people me-2"></i>
                    View Customers
                  </a>
                </div>
                <div className="col-md-3">
                  <a href="/admin/manage-contacts" className="btn btn-outline-warning w-100">
                    <i className="bi bi-envelope me-2"></i>
                    View Messages
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
      )}
    </AdminLayout>
  );
}

export default Dashboard;