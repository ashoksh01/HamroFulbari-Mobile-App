import React, { Component } from 'react';
import AdminHead from '../adminheader';
import axios from 'axios';
import '../../../css/adminpanel.css';

class AdminProfileUpdate extends Component{
    constructor(){
        super();
        this.state={
            fullname:"",
            email:"",
            contactnum:"",
            address:"",
            admin:"",
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
    
    updateUser = (e) =>{
        e.preventDefault();
        const userdata = {
            fullname: this.state.fullname,
            contactnum: this.state.contactnum,
            address: this.state.address        
        };
        axios.put('http://localhost:4000/userprofile/update/'+this.props.match.params.id, userdata, this.state.config)
        .then(response=> {
            this.setState({
                success:response.data.successmsg
            });
            setTimeout(function() {
                window.location.reload();
            }, 2000); 
          })
          .catch(error=>{    
            this.setState({
                error:"Could not update profile"
            });        
            console.log(error.response)
                alert(error.response);
            })
        }

        componentDidMount(){
            axios.get("http://localhost:4000/userprofile/uno/"+this.props.match.params.id,this.state.config)
            .then(res => {
                console.log(res.data);
                this.setState({
                    fullname: res.data.fullname,
                    email:res.data.email,
                    contactnum: res.data.contactnum,
                    address: res.data.address,
                    admin: res.data.admin
                });
              })
              .catch((error) => { 
                console.log(error);
              })
            }


        render(){
            return(
                <div>
                    <AdminHead/>
                    <div className="container-fluid content-wrapper">
                        <div className="row">
                            <div className="col-md-12 grid-margin">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h4 className="font-weight-bold navbar-brand brand-logo">User Profile Details</h4>
                                    </div>
                                    {/* <div> */}
                                        {/* <NavLink to={"/admin/profile/"+localStorage.getItem('id')} className="btn btn-primary btn-icon-text btn-rounded">Profile</NavLink> */}
                                    {/* </div> */}
                                </div>
                            </div>
                            <div className="col-md-6 grid-margin stretch-card">
                                <div className="card position-relative">
                                    <div className="card-body">
                                        <h4 className="card-title font-weight-bold">Profile Details</h4> 
                                        <div className="table-responsive mb-3 mb-md-0">
                                            <table className="table table-hover">
                                                <thead>
                                                    <tr>
                                                    <td colSpan="2"><strong>Full Name:</strong></td>
                                                        <td className="first-cap">{this.state.fullname}</td>
                                                    </tr> 
                                                    <tr>
                                                    <td colSpan="2"><strong>Email:</strong></td>
                                                        <td className="first-cap">{this.state.email}</td>
                                                    </tr> 
                                                    <tr>
                                                    <td colSpan="2"><strong>Contact Number:</strong></td>
                                                        <td className="first-cap">{this.state.contactnum}</td>
                                                    </tr> 
                                                    <tr>
                                                    <td colSpan="2"><strong>Address:</strong></td>
                                                        <td className="first-cap">{this.state.address}</td>
                                                    </tr> 
                                                    <tr>
                                                    <td colSpan="2"><strong>Role:</strong></td>
                                                        <td>{(this.state.admin === false ? "Shopper" : "Admin")}</td>
                                                    </tr> 
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 grid-margin stretch-card">
                                <div className="card position-relative">
                                <div className="alert alert-info" style={{ display: this.state.success!=="" ? "" : "none" }}>
                                {this.state.success}
                                </div>
                                <div className="alert alert-danger" style={{ display: this.state.error!=="" ? "" : "none" }}>
                                    {this.state.error}
                                </div> 
                                    <div className="card-body">
                                        <h4 className="card-title font-weight-bold">Edit Your Details</h4> 
                                        <form className="forms-sample">
                                            <div className="form-group">
                                                <label htmlFor="fullname">Full Name</label>
                                                <input type="text" className="form-control" name="fullname"
                                                value={this.state.fullname} onChange={this.handleChange}
                                                id="fullname" placeholder="fullname" autoCapitalize="true" autoFocus/>
                                            </div> 
                                            <div className="form-group">
                                                <label htmlFor="contactnum">Contact Number</label>
                                                <input type="text" className="form-control" name="contactnum"
                                                value={this.state.contactnum} onChange={this.handleChange}
                                                id="contactnum" placeholder="Contact Num"/>
                                            </div>   
                                            <div className="form-group">
                                                <label htmlFor="address">Address</label>
                                                <input type="text" className="form-control" name="address"
                                                value={this.state.address} onChange={this.handleChange}
                                                id="address" placeholder="Contact Num" autoCapitalize="true"/>
                                            </div>
                                            <input type="submit" onClick={this.updateUser} className="btn btn-success mr-2 float-left" />
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

export default AdminProfileUpdate;