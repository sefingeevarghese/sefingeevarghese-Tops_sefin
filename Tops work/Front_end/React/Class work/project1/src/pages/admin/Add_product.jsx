import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Add_product() {
    // const [data, setData] = useState({
    //     id: "",
    //     productName: "",
    //     category: "",
    //     price: "",
    //     description: "",
    //     image: ""
    // });

    // const changHandel = (e) => {
    
      
    //     setData({
    //         ...data,
    //         id: new Date().getTime().toString(),
    //         [e.target.name]: e.target.value
    //     });
    // }

    // const submitHandel = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const res = await axios.post(`http://localhost:3000/products`, data);
    //         console.log(res);
    //         setData({
    //             id: "",
    //             productName: "",
    //             category: "",
    //             price: "",
    //             description: "",
    //             image: ""
    //         });
    //     } catch (error) {
    //         console.error("Error adding product:", error);
    //     }
    // }

    const [product,setProduct]=useState({
            id: "",
        productName: "",
        category: "",
        price: "",
        description: "",
        image: ""

    })

    const eventHandler=(e)=>{
      setProduct({
        ...product,
         id: new Date().getTime().toString(),
        [e.target.name]:e.target.value
      })
    }
 let submitForm=async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`http://localhost:3000/products`, product);
            console.log(res);
            setProduct({
                id: "",
                productName: "",
                category: "",
                price: "",
                description: "",
                image: ""
            });
        } catch (error) {
            console.error("Error adding product:", error);
        }
   }
    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <div className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse" style={{ minHeight: '100vh' }}>
                    <div className="position-sticky pt-3">
                        <div className="text-center mb-4">
                            <h4 className="text-white">Admin Panel</h4>
                        </div>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/dashboard">
                                    <i className="bi bi-speedometer2 me-2"></i>
                                    Dashboard
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/manage_categories">
                                    <i className="bi bi-list-ul me-2"></i>
                                    Manage Categories
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/manage_product">
                                    <i className="bi bi-box me-2"></i>
                                    Manage Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/manage_order">
                                    <i className="bi bi-cart me-2"></i>
                                    Manage Orders
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/view_cart">
                                    <i className="bi bi-cart-check me-2"></i>
                                    View Cart
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/manage_customer">
                                    <i className="bi bi-people me-2"></i>
                                    Manage Customers
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-white" to="/manage_contact">
                                    <i className="bi bi-envelope me-2"></i>
                                    Manage Contacts
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Main Content */}
                <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Add New Product</h1>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={submitForm}>
                                        <div className="mb-3">
                                            <label htmlFor="productName" className="form-label">Product Name</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="productName"
                                                value={product.productName}
                                                name="productName"
                                                onChange={eventHandler}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="category" className="form-label">Category</label>
                                            <select
                                                className="form-select"
                                                id="category"
                                                value={product.category}
                                                name="category"
                                                onChange={eventHandler}
                                                required
                                            >
                                                <option value="">Select Category</option>
                                                <option value="electronics">Electronics</option>
                                                <option value="clothing">Clothing</option>
                                                <option value="books">Books</option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="price" className="form-label">Price</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="price"
                                                value={product.price}
                                                name="price"
                                                onChange={eventHandler}
                                                required
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="description" className="form-label">Description</label>
                                            <textarea
                                                className="form-control"
                                                id="description"
                                                rows="3"
                                                value={product.description}
                                                onChange={eventHandler}
                                                name="description"
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="image" className="form-label">Product Image</label>
                                            <input
                                                type="file"
                                                className="form-control"
                                                id="image"
                                                onChange={eventHandler}
                                                name="image"
                                                accept="image/*"
                                                required
                                            />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Add Product</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Add_product;