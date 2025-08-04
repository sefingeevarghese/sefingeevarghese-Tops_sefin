import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Index from "./pages/website/Index";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./pages/website/About";
import Services from "./pages/website/Services";
import OurTeam from "./pages/website/OurTeam";
import Contact from "./pages/website/Contact";
import Testimonial from "./pages/website/Testimonial";
import Notfound from "./pages/website/Notfound";
import LoginSignup from './Components/LoginSignup';

// Admin Components
import Admin_login from "./pages/admin/Admin_login";
import Dashboard from "./pages/admin/Dashboard";
import Add_categories from "./pages/admin/Add_categories";
import Manage_categories from "./pages/admin/Manage_categories";
import Add_product from "./pages/admin/Add_product";
import Manage_product from "./pages/admin/Manage_product";
import Manage_order from "./pages/admin/Manage_order";
import View_cart from "./pages/admin/View_cart";
import Manage_customer from "./pages/admin/Manage_customer";
import Manage_contact from "./pages/admin/Manage_contact";

// PrivateRoute component
function PrivateRoute({ children }) {
  const isAdmin = localStorage.getItem('isAdmin') === 'true';
  return isAdmin ? children : <Navigate to="/admin-login" />;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Index /><Footer /></>}></Route>
          <Route path="/about" element={<><About /><Footer /></>}></Route>
          <Route path="/Services" element={<><Services /><Footer /></>}></Route>
          <Route path="/ourteam" element={<><OurTeam /><Footer /></>}></Route>
          <Route path="/contact" element={<><Contact /><Footer /></>}></Route>
          <Route path="/testimonial" element={<><Testimonial /><Footer /></>}></Route>
          <Route path="/notfound" element={<><Notfound /><Footer /></>}></Route>
          <Route path="/loginsignup" element={<LoginSignup />}></Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<Admin_login />}></Route>
          <Route path="/admin-login" element={<Admin_login />}></Route>
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}></Route>
          <Route path="/add_categories" element={<PrivateRoute><Add_categories /></PrivateRoute>}></Route>
          <Route path="/manage_categories" element={<PrivateRoute><Manage_categories /></PrivateRoute>}></Route>
          <Route path="/add_product" element={<PrivateRoute><Add_product /></PrivateRoute>}></Route>
          <Route path="/manage_product" element={<PrivateRoute><Manage_product /></PrivateRoute>}></Route>
          <Route path="/view_cart" element={<PrivateRoute><View_cart /></PrivateRoute>}></Route>
          <Route path="/manage_customer" element={<PrivateRoute><Manage_customer /></PrivateRoute>}></Route>
          <Route path="/manage_contact" element={<PrivateRoute><Manage_contact /></PrivateRoute>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
