import React, { Component } from 'react';
import '../css/frontend.css';
import axios from 'axios';

class RequestBody extends Component{
    constructor(props) {
        super(props)
        this.state = {
            productname:"",
            productprice:"",
            productquantity:"",
            userName:"",
            extracomment:"",
            userID:"",
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

    addUserRequest = (e) =>{
        e.preventDefault();
        const userreq = {
            productname: this.state.productname,
            productprice: this.state.productprice,
            productquantity: this.state.productquantity,
            userName: localStorage.getItem('name'),
            extracomment: this.state.extracomment,
            userID: localStorage.getItem('id'),        
        };
        axios.post('http://localhost:4000/request/',userreq,this.state.config)
        .then(response=> {
            this.setState({
                success:response.data.successmsg
            });
            setTimeout(function() {
                window.location.reload();
            }, 3000);
          })
          .catch(error=>{            
            this.setState({
                error:"Something went wrong. Try again!"
            });
            console.log(error.response.data.errmsg)
            })
        }

   
    render(){
        return(
            <section className="text-center bg-light">
              <div className="container bg-container requestcontainer shadow">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="alert alert-info" style={{ display: this.state.success!=="" ? "" : "none" }}>
                                {this.state.success}
                            </div>
                            <div className="alert alert-danger" style={{ display: this.state.error!=="" ? "" : "none" }}>
                                    {this.state.error}
                            </div>
                            <div className=" my-5 shadow">
                            <div className="card-body">
                                <h5 className=" loginh1 card-title text-center first-cap mb-2">Your request</h5>
                                <form className="form-signin">
                                    <div className="form-label-group">
                                        <input type="text" id="productname" className="form-control text-center" name="productname" 
                                        value={this.state.productname} onChange={this.handleChange}
                                        placeholder="Product Name" autoFocus/>
                                        <label htmlFor="productname" className="first-cap">Enter product's name</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="text" id="productprice" className="form-control text-center" name="productprice"
                                        value={this.state.productprice} onChange={this.handleChange}
                                        placeholder="Estimated Price" required/>
                                        <label htmlFor="productprice" className="first-cap">guess the price</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="text" id="productquantity" className="form-control text-center" name="productquantity"
                                        value={this.state.productquantity} onChange={this.handleChange}
                                        placeholder="Product quantity" required/>
                                        <label htmlFor="productquantity" className="first-cap">Mention required quantity</label>
                                    </div>
                                    <div className="form-label-group">
                                        <input type="text" id="extracomment" className="form-control text-center" name="extracomment"
                                         value={this.state.extracomment} onChange={this.handleChange}
                                        placeholder="Additional Comment" required />
                                        <label htmlFor="extracomment" className="first-cap">Additional comment</label>
                                    </div>
                                    <input type="submit" onClick={this.addUserRequest} className="loginghost loginbutton text-uppercase" 
                                    value="Submit Request" />
                                </form>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </section>
        );
    }
}

export default RequestBody;