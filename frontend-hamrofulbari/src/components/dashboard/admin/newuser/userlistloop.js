import React, { Component } from 'react';
import '../../../css/frontend.css';
import axios from 'axios';

class UserListLoop extends Component{
    constructor(props) {
        super(props)
        this.state = {
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
        removeAccount = (e) =>{
            e.preventDefault();
            if(this.props.usuperadmin){
                this.setState({
                    error:"Main/Super Admin Account Cannot be terminated"
                });
            }else{
            axios.delete('http://localhost:4000/remove/user/'+this.props.uid, this.state.config)
            .then(response=> {
              console.log(response.data.successmsg)
                this.setState({
                    success:response.data.successmsg
                });
                setTimeout(function() {
                    window.location.reload();
                }, 3000);
            }).catch(error=>{            
                this.setState({
                    error:"Account could not be terminated"
                });
                console.log(error.response.data.errmsg);       
                })
            }
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
                <tr>
                    <td>{this.props.uname}</td>
                    <td>{this.props.uemail}</td>
                    <td>{this.props.uaddress}</td>
                    <td>{this.props.ucontactnum}</td>
                    <td>{(this.props.uadmin) === false ? 
                    <span className="badge badge-success">General User</span> :<span className="badge badge-info">Admin</span>}</td>
                    <td><button type="submit" onClick={this.removeAccount} className="btn btn-inverse-danger btn-fw">Terminate</button></td>
                </tr>
            </thead>
        );
    }
}

export default UserListLoop;