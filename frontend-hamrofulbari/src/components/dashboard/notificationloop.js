import React, { Component } from 'react';
import '../css/frontend.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

class NotificationLoop extends Component{
    constructor(props) {
        super(props)
        this.state = {
            productname:this.props.pname,
            productprice: this.props.pprice,
            productquantity: this.props.pqaun,
            extracomment: this.props.pcomment,
            success:"", 
            error:"",
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    handleChange = (e) => {
        this.setState(
            { [e.target.name]: e.target.value }
        )
    }

    removeRequest = (e) =>{
        e.preventDefault();
        axios.delete('http://localhost:4000/request/'+this.props.reqid, this.state.config)
        .then(response=> {
          console.log(response.data.successmsg)
            this.setState({
                success:response.data.successmsg
            });
            setTimeout(function() {
                window.location.reload();
            }, 2000);
        }).catch(error=>{            
            this.setState({
                error:"Request could not be canceled. Try Again."
            });
            console.log(error.response.data.errmsg)
            
            })
        }

        removeResponse = (e) =>{
            e.preventDefault();
            axios.delete('http://localhost:4000/request/'+this.props.reqid, this.state.config)
            .then(response=> {
              console.log(response.data.successmsg)
                this.setState({
                    success:"Response has been Removed"
                });
                setTimeout(function() {
                    window.location.reload();
                }, 2000);
            }).catch(error=>{            
                this.setState({
                    error:"Response could not be removed."
                });
                console.log(error.response.data.errmsg)
                
                })
            }

            updateRequest = (e) =>{
                e.preventDefault();
                const updatedata = {
                    productname: this.state.productname,
                    productprice: this.state.productprice,
                    productquantity: this.state.productquantity,
                    extracomment: this.state.extracomment
                };
                axios.put('http://localhost:4000/request/'+this.props.reqid, updatedata, this.state.config)
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
                        error:"Response could not be sent"
                    });        
                    console.log(error.response)
                        alert(error.response);
                    })
                }

    render(){
        return(
          <div>
            {this.props.padminres === false ?   
            <div>
                <div className="alert alert-info" style={{ display: this.state.success!=="" ? "" : "none" }}>
                    {this.state.success}
                </div>
                <div className="alert alert-danger" style={{ display: this.state.error!=="" ? "" : "none" }}>
                    {this.state.error}
                </div> 
                <hr/>
                <div className="p-3"> 
                    <strong className="default first-cap">
                        <i className="fa fa-smile-o"></i> Valued Consumer {localStorage.getItem("name")}
                    </strong><hr/>
                    <p>Your Request for <strong>{this.props.pname}</strong> has been sent and is under
                    processing. We will respond soon. Thank you for your patience.</p> 
                    <div className='d-flex justify-content-center'>
                    <span><button type="submit" onClick={this.removeRequest} className="btn btn-danger first-cap m-2">Cancel Request</button></span>
                    <p><label data-toggle="modal" data-target={"#exampleModalCenter"+this.props.reqid} className="btn btn-success first-cap m-2">Update Request</label></p>

                    </div>
                </div>
                <div className="modal fade" id={"exampleModalCenter"+this.props.reqid} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title first-cap" id="exampleModalLongTitle">You Requested for {this.props.pname}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="alert alert-info" style={{ display: this.state.success!=="" ? "" : "none" }}>
                                    {this.state.success}
                            </div>
                            <div className="alert alert-danger" style={{ display: this.state.error!=="" ? "" : "none" }}>
                                {this.state.error}
                            </div> 
                            <div className="modal-body">
                                <form className="forms-sample">
                                    <div className="form-group">
                                        <label htmlFor={this.props.pname} className="first-cap">Product Name</label>
                                        <input type="text" className="form-control"
                                        value={this.state.productname} onChange={this.handleChange}
                                        name="productname" id={this.props.pname}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={this.props.pprice} className="first-cap">Estimated Price</label>
                                        <input type="text" className="form-control"
                                        value={this.state.productprice} onChange={this.handleChange}
                                        name="productprice" id={this.props.pprice}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={this.props.pquan} className="first-cap">Requested Quantity</label>
                                        <input type="text" className="form-control"
                                        value={this.state.productquantity} onChange={this.handleChange}
                                        name="productquantity" id={this.props.pquan}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor={this.props.pcomment} className="first-cap">Your Comment</label>
                                        <textarea type="text" className="form-control"
                                        rows="4" column="4" onChange={this.handleChange}
                                        name="extracomment" 
                                        value={this.state.extracomment} id={this.props.pcomment}>
                                        </textarea>
                                    </div>
                                    {/* <input type="submit" class="btn btn-primary mr-2 float-left"/> */}
                                </form>
                            </div>
                            <div className="d-inline">
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                <button type="submit" onClick={this.updateRequest} className="btn btn-primary">Update Request</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            :    
            <div>
                <div className="alert alert-info" style={{ display: this.state.success!=="" ? "" : "none" }}>
                    {this.state.success}
                </div>
                <div className="alert alert-danger" style={{ display: this.state.error!=="" ? "" : "none" }}>
                    {this.state.error}
                </div> 
                <div className="alert alert-success"> 
                     <strong className="default first-cap">
                        <button type="submit" onClick={this.removeResponse}className="close" aria-hidden="true">×</button>
                        <i className="fa fa-check"></i> Valued Consumer {localStorage.getItem("name")}
                     </strong><hr/>
                     <p>
                         {
                         (this.props.admincomment === "") 
                         ?  this.props.admincomment 
                         : "Your Request for " + this.props.pname +" has been listed. We will try to add requested product within next few days. Thank you for your patience. "}

                        Meanwhile, you can <NavLink to="/products" className="notification-link"> Browse store products </NavLink>
                        or send another
                        <NavLink to="/user/request" className="notification-link first-cap"> Request </NavLink> if you like.
                    </p>
                </div>
            </div>
               
               }
            
            {/* <div className="alert alert-info"> 
                <strong className="default">
                    <i className="fa fa-bell"></i> John
                </strong> sent you friend request. 
                <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button>
                {/* <button type="button" className="close" aria-hidden="true"><i class="fa fa-folder"></i></button> 
            </div> */}
        </div>          
        );
    }
}

export default NotificationLoop;