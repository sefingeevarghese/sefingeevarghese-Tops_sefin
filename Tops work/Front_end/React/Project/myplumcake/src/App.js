import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './Components/CartContext';
import Index from "./pages/website/Index";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./pages/website/About";
import Services from "./pages/website/Services";
import OurTeam from "./pages/website/OurTeam";
import Contact from "./pages/website/Contact";
import Testimonial from "./pages/website/Testimonial";
import Notfound from "./pages/website/Notfound";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Profile from './Components/Profile';
import User_profile from './Components/User_profile';
import Orders from './Components/Orders';
import Cart from './Components/Cart';
import User_after_auth from './Components/User_after_auth';
import User_before_auth from './Components/User_before_auth';
import Admin_after_auth from './Components/Admin_after_auth';

// Admin Components
import Admin_login from "./pages/admin/Admin_login";
import Dashboard from "./pages/admin/Dashboard";
import Add_categories from "./pages/admin/Add_categories";
import Manage_categories from "./pages/admin/Manage_categories";
import Add_product from "./pages/admin/Add_product";
import Manage_product from "./pages/admin/Manage_product";
import View_cart from "./pages/admin/View_cart";
import Manage_customer from "./pages/admin/Manage_customer";
import Manage_contact from "./pages/admin/Manage_contact";

// Layout component for website pages
function WebsiteLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes>
          {/* Website Routes */}
          <Route path="/" element={<WebsiteLayout><Index /></WebsiteLayout>} />
          <Route path="/about" element={<WebsiteLayout><About /></WebsiteLayout>} />
          <Route path="/Services" element={<WebsiteLayout><Services /></WebsiteLayout>} />
          <Route path="/ourteam" element={<WebsiteLayout><OurTeam /></WebsiteLayout>} />
          <Route path="/contact" element={<WebsiteLayout><Contact /></WebsiteLayout>} />
          <Route path="/testimonial" element={<WebsiteLayout><Testimonial /></WebsiteLayout>} />
          <Route path="/notfound" element={<WebsiteLayout><Notfound /></WebsiteLayout>} />
          
          {/* Public Auth Routes - Prevent authenticated users from accessing */}
          <Route path="/login" element={<User_before_auth><Login /></User_before_auth>} />
          <Route path="/signup" element={<User_before_auth><Signup /></User_before_auth>} />
          
          {/* Protected User Routes */}
          <Route path="/profile" element={<User_after_auth><Profile /></User_after_auth>} />
          <Route path="/user-profile" element={<User_after_auth><User_profile /></User_after_auth>} />
          <Route path="/orders" element={<User_after_auth><Orders /></User_after_auth>} />
          <Route path="/cart" element={<WebsiteLayout><Cart /></WebsiteLayout>} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Navigate to="/admin-login" />} />
          <Route path="/admin-login" element={<Admin_login />} />
          <Route path="/admin/dashboard" element={<Admin_after_auth><Dashboard /></Admin_after_auth>} />
          <Route path="/admin/add-categories" element={<Admin_after_auth><Add_categories /></Admin_after_auth>} />
          <Route path="/admin/manage-categories" element={<Admin_after_auth><Manage_categories /></Admin_after_auth>} />
          <Route path="/admin/add-product" element={<Admin_after_auth><Add_product /></Admin_after_auth>} />
          <Route path="/admin/manage-products" element={<Admin_after_auth><Manage_product /></Admin_after_auth>} />
          <Route path="/admin/view-cart" element={<Admin_after_auth><View_cart /></Admin_after_auth>} />
          <Route path="/admin/manage-customers" element={<Admin_after_auth><Manage_customer /></Admin_after_auth>} />
          <Route path="/admin/manage-contacts" element={<Admin_after_auth><Manage_contact /></Admin_after_auth>} />

          {/* Legacy admin routes for backward compatibility */}
          <Route path="/dashboard" element={<Navigate to="/admin/dashboard" />} />
          <Route path="/add_categories" element={<Navigate to="/admin/add-categories" />} />
          <Route path="/manage_categories" element={<Navigate to="/admin/manage-categories" />} />
          <Route path="/add_product" element={<Navigate to="/admin/add-product" />} />
          <Route path="/manage_product" element={<Navigate to="/admin/manage-products" />} />
          <Route path="/view_cart" element={<Navigate to="/admin/view-cart" />} />
          <Route path="/manage_customer" element={<Navigate to="/admin/manage-customers" />} />
          <Route path="/manage_contact" element={<Navigate to="/admin/manage-contacts" />} />

          {/* Catch all route */}
          <Route path="*" element={<Navigate to="/notfound" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
