import React, { Component } from 'react';
import AdminNav from './adminheader';
import '../../css/adminpanel.css';
import MainFooter from '../adminfooter';
import axios from 'axios';
import AdminReqView from './adminnotifyloop';



class AdminDashBody extends Component{
  constructor(props) {
    super(props)
    this.state = {
        arrayresp: 0,
        request: [],
        userid:localStorage.getItem('id'),
        config: {
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }
}

componentDidMount() {
  axios.get('http://localhost:4000/request', this.state.config)
      .then((response) => {
          this.setState({
              request: response.data
              
          })
      });     
}

render(){
  const userReq = this.state.request.map((notifilist,index)=>{
    return <AdminReqView key={notifilist._id} reqid={notifilist._id}
    pname={notifilist.productname} pprice={notifilist.productprice} 
    pquan={notifilist.productquantity} puser={notifilist.userName} pcomment={notifilist.extracomment}
    padminres={notifilist.adminresponse} admincomment={notifilist.admincomment}
    />
})
    return(
      <div className="container-scroller" id="page-content-wrapper">
         <AdminNav/>
         <div className="container content-wrapper">
            <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="d-flex justify-content-between align-items-center"><div>
                <h4 className="font-weight-bold navbar-brand brand-logo">Notification Panel</h4>
                </div>
              </div>
            </div>
            <div className="col-sm-9 col-md-12 col-lg-5 mx-auto">
              <div className="card">
                <div className="card-body">
                  <p className="card-title font-weight-bold">User Product Requests</p>
                  <div className="table-responsive">
                   
                      {(userReq === 0) ? "wwww" 
                      : 
                      <table className="table table-hover">
                      <thead>
                        <tr>
                          <th>Requested Product</th>
                          <th>Requested By</th>
                          <th>Requested Quantity</th>
                          <th>User Comment</th>
                          <th>Response Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                        {userReq}
                    </table>
                      }
                  </div>
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
export default AdminDashBody;