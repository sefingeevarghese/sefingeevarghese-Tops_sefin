/*

Create React App doesn't include page routing.

React Router is the most popular solution.

Add React Router
To add React Router in your application, run this in the terminal from the root directory of the 
application:

npm i react-router-dom


app.js

<BrowserRouter>
    <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path="*" element={<PNF/>}></Route>
    </Routes>
</BrowserRouter>    


header.jsx

<li className="nav-item">
    <NavLink className="nav-link" to="/">Home</NavLink>
</li>
<li className="nav-item">
    <NavLink className="nav-link" to="/about">About</NavLink>
</li>
<li className="nav-item">
    <NavLink className="nav-link" to="/blog">Blog</NavLink>
</li>
<li className="nav-item">
    <NavLink className="nav-link" to="/contact">Contact</NavLink>
</li>

*/
import React from 'react'
import Index from './Pages/Index'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PNF from './Pages/PNF'


function Route_app() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="/blog" element={<Blog/>}></Route>
                <Route path="*" element={<PNF/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Route_app