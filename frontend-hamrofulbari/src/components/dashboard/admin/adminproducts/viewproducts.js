import React, { Component } from 'react';
import AdminHead from '../adminheader';
import axios from 'axios';
import '../../../css/adminpanel.css';
import {NavLink} from 'react-router-dom';
import ProductLoop from './loopproducts';

class ViewProducts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    } 
    componentDidMount() {
        axios.get('http://localhost:4000/products', this.state.config)
            .then((response) => {
                this.setState({
                    products: response.data
                })
            });
    }
        
        render(){
            const adminLoopProduct = this.state.products.map((prolist,index)=>{
                return <ProductLoop key={prolist._id} pid={prolist._id}
                 pname={prolist.name} pprice={prolist.price}
                 pcategory={prolist.category} pimage={prolist.image}
                 pdescription={prolist.description}/>
            })
            return( 
                <div>
                    <AdminHead/>
                    <div className="container content-wrapper">
                        <div className="row">
                            <div className="col-md-12 grid-margin">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h4 className="font-weight-bold navbar-brand brand-logo">Product List</h4>
                                    </div>
                                    <div>
                                        <NavLink to="/addproducts" className="btn btn-success btn-icon-text btn-rounded">
                                        Add New Product</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 grid-margin stretch-card">
                                <div className="card position-relative">
                                    <div className="card-body">
                                        <h4 className="card-title font-weight-bold">List of available Product</h4> 
                                        <div className="table-responsive">
                                            <table className="table table-hover table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>Image</th>
                                                        <th>Name</th>
                                                        <th>Price</th>
                                                        <th>Category</th>
                                                        <th>Description</th>
                                                        <th>Changes</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                    {adminLoopProduct}
                                            </table>
                                        </div>        
                                    </div>
                                </div>
                            </div>
                        </div>
                    <footer className="footer">
                    <div className="d-sm-flex justify-content-center justify-content-sm-between">
                        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                            Copyright © 2022 Hamrofulbari plants and flowers Store Shopping.</span>
                        <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                            Admin Panel | Hamro Fulbari</span>
                    </div>
                    </footer>
                </div>
            </div>
   
         
            );
        }
    }

export default ViewProducts;