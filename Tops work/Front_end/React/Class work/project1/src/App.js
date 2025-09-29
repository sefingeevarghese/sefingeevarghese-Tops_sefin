import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/website/Index";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./pages/website/About";
import Courses from "./pages/website/Courses";
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

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Index /><Footer /></>}></Route>
          <Route path="/about" element={<><About /><Footer /></>}></Route>
          <Route path="/courses" element={<><Courses /><Footer /></>}></Route>
          <Route path="/ourteam" element={<><OurTeam /><Footer /></>}></Route>
          <Route path="/contact" element={<><Contact /><Footer /></>}></Route>
          <Route path="/testimonial" element={<><Testimonial /><Footer /></>}></Route>
          <Route path="/notfound" element={<><Notfound /><Footer /></>}></Route>
          <Route path="/loginsignup" element={<LoginSignup />}></Route>

          {/* Admin Routes */}
          <Route path="/admin" element={<Admin_login />}></Route>
          <Route path="/admin-login" element={<Admin_login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/add_categories" element={<Add_categories />}></Route>
          <Route path="/manage_categories" element={<Manage_categories />}></Route>
          <Route path="/add_product" element={<Add_product />}></Route>
          <Route path="/manage_product" element={<Manage_product />}></Route>
          <Route path="/manage_order" element={<Manage_order />}></Route>
          <Route path="/view_cart" element={<View_cart />}></Route>
          <Route path="/manage_customer" element={<Manage_customer />}></Route>
          <Route path="/manage_contact" element={<Manage_contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
