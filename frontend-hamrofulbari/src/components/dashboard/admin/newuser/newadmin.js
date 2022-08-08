import React, { Component } from 'react';
import AdminHead from '../adminheader';
import axios from 'axios';
import '../../../css/adminpanel.css';
import MainFooter from '../../adminfooter';
import {NavLink} from 'react-router-dom';

class AddNewAdmin extends Component{
    constructor(){
        super();
        this.state={
            fullname: "",
            email:"",
            password:"",
            contactnum:"",
            address:"",
            success:"", 
            error:"",
            config: {
                headers: { 
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

    registerAdmin = (e) =>{
        e.preventDefault();
        const userdata = {
            fullname: this.state.fullname,
            email: this.state.email,
            password: this.state.password,
            contactnum: this.state.contactnum,
            address: this.state.address,
            admin:true       
        };
        
        axios.post('http://localhost:4000/admin/registration', userdata, this.state.config)
        .then(response=> {
            this.setState({
                success:response.data.successmsg
            });
            setTimeout(function() {
                window.location.reload()
               }, 3000);
          })
          .catch(error=>{            
            this.setState({
                error:"Could not Register Admin!"
            });
            console.log(error.response.data.errmsg)
            
            })
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
                                        <h4 className="font-weight-bold navbar-brand brand-logo">Create New Admin</h4>
                                    </div>
                                  
                                    <div>
                                        <NavLink to="/view/alluser" className="btn btn-success btn-icon-text btn-rounded">Back</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 grid-margin stretch-card">
                                <div className="card position-relative">
                                    <div className="card-body">
                                        <h4 className="card-title">New Admin Details</h4> 
                                        <div className="alert alert-info" style={{ display: this.state.success!=="" ? "" : "none" }}>
                                            {this.state.success}
                                        </div>
                                        <div className="alert alert-danger" style={{ display: this.state.error!=="" ? "" : "none" }}>
                                            {this.state.error}
                                        </div>
                                        <form className="forms-sample">
                                            <div className="form-group">
                                                <label htmlFor="fullname">Name</label>
                                                <input type="text" className="form-control" name="fullname"
                                                value={this.state.fullname} onChange={this.handleChange}
                                                id="fullname" placeholder="Fullname" autoCapitalize="true" autoFocus/>
                                            </div>    
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label> 
                                                <input type="text" className="form-control" name="email"
                                                value={this.state.email} onChange={this.handleChange}
                                                id="email" placeholder="Email"/>
                                            </div>   
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" className="form-control" name="password"
                                                value={this.state.password} onChange={this.handleChange}
                                                id="password" placeholder="Password" autoComplete="true"/>
                                            </div>   
                                            <div className="form-group">
                                                <label htmlFor="contactnum">Contact Number</label>
                                                <input type="text" className="form-control" name="contactnum"
                                                value={this.state.contactnum} onChange={this.handleChange}
                                                id="contactnum" placeholder="Contact Number" autoComplete="true"/>
                                            </div>   
                                            <div className="form-group">
                                                <label htmlFor="address">Address</label>
                                                <input type="text" className="form-control" name="address"
                                                value={this.state.address} onChange={this.handleChange}
                                                id="address" placeholder="Address" autoComplete="true"/>
                                            </div>   
                                            <input type="submit" onClick={this.registerAdmin} className="btn btn-success mr-2 float-left" />
                                          
                                            {/* <button className="btn btn-light float-left">Clear</button> */}
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <MainFooter/>
                </div>
            );
        }
    }

export default AddNewAdmin;