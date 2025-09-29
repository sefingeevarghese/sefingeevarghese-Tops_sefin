import React from 'react';
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <div className="container-fluid">
        <div className="row">
          <AdminSidebar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 py-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;