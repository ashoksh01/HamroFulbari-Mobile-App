import React, { Component } from 'react';
import AdminHead from '../adminheader';
import axios from 'axios';
import '../../../css/adminpanel.css';
import {NavLink} from 'react-router-dom';
import UserListLoop from './userlistloop';
import MainFooter from '../../adminfooter';

class ViewUserList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            success:"",
            error:"",
            allusers: [],
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    } 
    componentDidMount() {
        axios.get('http://localhost:4000/user/displayall/', this.state.config)
            .then((response) => {
                this.setState({
                    allusers: response.data
                })
            });
    }

        render(){
            const usrlist = this.state.allusers.map((prolist,index)=>{
                return <UserListLoop key={prolist._id} 
                uid={prolist._id} 
                uname={prolist.fullname} uemail={prolist.email}
                ucontactnum={prolist.contactnum} uadmin={prolist.admin}
                uaddress={prolist.address} usuperadmin={prolist.superadmin} />
            })
            return( 
                <div>
                    <AdminHead/>
                    <div className="container content-wrapper">
                        <div className="row">
                            <div className="col-md-12 grid-margin">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                        <h4 className="font-weight-bold navbar-brand brand-logo">UserList List</h4>
                                    </div>
                                    <div>
                                        <NavLink to="/registeradmin" className="btn btn-success btn-icon-text btn-rounded">
                                        Add Admin</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 grid-margin stretch-card">
                                <div className="card position-relative">
                                    <div className="card-body">
                                        <h4 className="card-title font-weight-bold">List of available Users</h4> 
                                        <div className="table-responsive">
                                            <table className="table table-hover table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>User Name</th>
                                                        <th>Email</th>
                                                        <th>Address</th>
                                                        <th>Contact</th>
                                                        <th>User Type</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                    {usrlist}
                                            </table>
                                        </div>        
                                    </div>
                                </div>
                            </div>
                        </div>
                 <MainFooter/>
                </div>
            </div>
   
         
            );
        }
    }

export default ViewUserList;