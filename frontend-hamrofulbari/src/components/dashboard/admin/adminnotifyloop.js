import React, { Component } from 'react';
import '../../css/frontend.css';
import axios from 'axios';

class AdminNotificationLoop extends Component{
    constructor(props) {
        super(props)
        this.state = {
            success:"", 
            error:"",
            admincomment:"",
            adminresponse:"",
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

    updateResponse = (e) =>{
        e.preventDefault();
        const responsedata = {
            admincomment: this.state.fullname,
            adminresponse: true 
        };
        axios.put('http://localhost:4000/admin/request/'+this.props.reqid, responsedata, this.state.config)
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

    render(){
        return(
            <thead>
                <tr className="alert alert-info" style={{ display: this.state.success!=="" ? "" : "none" }}>
                    <td colSpan="6">{this.state.success}</td>
                </tr>
                <tr className="alert alert-danger" style={{ display: this.state.error!=="" ? "" : "none" }}>
                    <td colSpan="6">{this.state.error}</td>
                </tr>
                {this.props.padminres === false ?   
                <tr>
                    <td className="first-cap">{this.props.pname}</td>
                    <td className="first-cap">{this.props.puser}</td>
                    <td className="first-cap"> {this.props.pquan} <i className="ti-arrow-down"></i></td>
                    <td>{this.props.pcomment}</td>
                    <td><label className="badge badge-danger">Pending</label></td>
                    <td><label className="btn btn-success" data-toggle="modal" data-target={"#exampleModalCenter"+this.props.reqid}>Respond</label></td>
                    <td className="modal fade" id={"exampleModalCenter"+this.props.reqid} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title first-cap" id="exampleModalLongTitle">Response for {this.props.puser}</h5>
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
                                    <label htmlFor={this.props.pname} className="first-cap">Response Note</label>
                                    <textarea type="text" className="form-control"
                                    rows="3" column="3" onChange={this.handleChange}
                                    name="admincomment"
                                    value={this.state.admincomment} id={this.props.pname}>
                                    </textarea>
                                </div>
                                {/* <input type="submit" class="btn btn-primary mr-2 float-left"/> */}
                            </form>
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" onClick={this.updateResponse} className="btn btn-primary">Send Response</button>
                    </div>
                </div>
            </div> 
        </td>
    </tr> 
            :    
            <tr>
                <td className="first-cap">{this.props.pname}</td>
                <td className="first-cap">{this.props.puser}</td>
                <td className="first-cap"> {this.props.pquan} <i className="ti-arrow-down"></i></td>
                <td>{this.props.pcomment}</td>
                <td><label className="badge badge-success">Response sent</label></td>
                <td><label onClick={this.removeResponse} className="btn btn-danger">Remove</label></td>
            </tr>    
               }
          
                
        </thead>         
        );
    }
}

export default AdminNotificationLoop;