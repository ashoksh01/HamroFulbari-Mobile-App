import React, { Component } from 'react';
import AdminHead from '../adminheader';
import axios from 'axios';
import '../../../css/adminpanel.css';
import {NavLink} from 'react-router-dom';

class AddProducts extends Component{
    constructor(){
        super();
        this.state={
            name: "",
            price:"",
            category:"",
            description:"",
            image:"",
            loggedinemail:localStorage.getItem('email'),
            success:"",
            error:"",
            config: {
                headers: { 
                    'content-type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    handleImageChange = (e) => {
        this.setState({
          image: e.target.files[0]
        })
      };

      productADD = (e) =>{
          e.preventDefault();
          if(this.state.image){
            let productDetails = new FormData();
            productDetails.append('name', this.state.name);
            productDetails.append('price', this.state.price);
            productDetails.append('category', this.state.category);
            productDetails.append('description', this.state.description);
            productDetails.append('loggedinmail', this.state.loggedinemail);
            productDetails.append('image', this.state.image, this.state.image.name);
            axios.post('http://localhost:4000/products/', productDetails, this.state.config)
              .then(response=> {
              console.log(response.data.successmsg)            
                  // window.location.reload();
              this.setState({
                  success:response.data.successmsg
              });
                setTimeout(function() {
                  window.location.reload()
                 }, 3000);
              })
              .catch(error=>{   
                  this.setState({
                      error:"Something went wrong. Try again!"
                    })
                  console.log(error.response.data.errmsg)
                  })
          }else{
            this.setState({
                error:"Choose Product Image First"
              })
          }
          
        }


        render(){
            return(
                <div className="container-scroller" id="page-content-wrapper">
                    <AdminHead/>
                    <div className="container content-wrapper">
                        <div className="row">
                            <div className="col-md-12 grid-margin">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h4 className="font-weight-bold navbar-brand brand-logo">Add New Product {this.state.success}</h4>
                                    </div>
                                  
                                    <div>
                                        <NavLink to="/viewproducts" className="btn btn-success btn-icon-text btn-rounded">Product List</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 grid-margin stretch-card">
                                <div className="card position-relative">
                                    <div className="card-body">
                                        <h4 className="card-title">Enter Product Details</h4> 
                                        <div className="alert alert-info" style={{ display: this.state.success!=="" ? "" : "none" }}>
                                            {this.state.success}
                                        </div>
                                        <div className="alert alert-danger" style={{ display: this.state.error!=="" ? "" : "none" }}>
                                            {this.state.error}
                                        </div>
                                        <form className="forms-sample">
                                            <div className="form-group">
                                                <label htmlFor="name">Name</label>
                                                <input type="text" className="form-control" name="name"
                                                value={this.state.name} onChange={this.handleChange}
                                                id="name" placeholder="Name" autoCapitalize="true" autoFocus/>
                                            </div>    
                                            <div className="form-group">
                                                <label htmlFor="price">Price</label> 
                                                <input type="text" className="form-control" name="price"
                                                value={this.state.price} onChange={this.handleChange}
                                                id="price" placeholder="Product Price"/>
                                            </div>   
                                            <div className="form-group">
                                                <label htmlFor="category">Category</label>
                                                <input type="text" className="form-control" name="category"
                                                value={this.state.category} onChange={this.handleChange}
                                                id="category" placeholder="Category" autoComplete="true"/>
                                            </div>   
                                            <div className="form-group">
                                                <label htmlFor="image">Image</label> 
                                                <input type="file" name="image" onChange={this.handleImageChange} 
                                                id="image" className="form-control"/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="description">Description</label> 
                                                <textarea className="form-control" id="description" name="description"
                                                onChange={this.handleChange} placeholder="Description"
                                                    rows="4"></textarea>
                                            </div>
                                            <input type="submit" onClick={this.productADD} className="btn btn-success mr-2 float-left" />
                                            {/* <button className="btn btn-light float-left">Clear</button> */}
                                            </form>
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
            );
        }
    }

export default AddProducts;