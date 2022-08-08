import React from 'react'
import axios from 'axios';

class AdminProductDisp extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name:this.props.pname,
            price:this.props.pprice,
            category:this.props.pcategory,
            description:this.props.pdescription,
            loggedinmail:localStorage.getItem('email'),
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

    deleteProduct = (e) =>{
        e.preventDefault();
        axios.delete('http://localhost:4000/products/'+this.props.pid, this.state.config)
        .then(response=> {
          console.log(response.data.successmsg)
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
    }

    updateProduct = (e) =>{
        e.preventDefault();
        const updatedata = {
            name: this.state.name,
            price: this.state.price,
            category: this.state.category,
            description: this.state.description,
            loggedinmail: this.state.loggedinmail
        };
        axios.put('http://localhost:4000/products/'+this.props.pid, updatedata, this.state.config)
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
                error:"Product Could not be updated"
            });        
            console.log(error.response)
                alert(error.response);
            })
    }


    render(){
        return(
            <thead>
                <tr>
                    <td colSpan="7" className="alert alert-info" style={{ display: this.state.success!=="" ? "" : "none" }}>
                        {this.state.success}
                    </td>
                    <td colSpan="7"  className="alert alert-danger" style={{ display: this.state.error!=="" ? "" : "none" }}>
                        {this.state.error}
                    </td>
                </tr>
                <tr>
                    <td className="py-1">
                        <img src={`http://localhost:4000/productuploads/${this.props.pimage}`}  
                        alt={this.props.pname} />
                    </td>
                    <td>{this.props.pname}</td>
                    <td>Nrs. {this.props.pprice}</td>
                    <td>{this.props.pcategory}</td>
                    <td>{this.props.pdescription}</td>
                    <td><button data-toggle="modal" data-target={"#exampleModalCenter"+this.props.pid} className="btn btn-inverse-info btn-fw">Update</button></td>
                    <td><button onClick={this.deleteProduct} className="btn btn-inverse-danger btn-fw">Remove</button></td>
                    <td className="modal fade" id={"exampleModalCenter"+this.props.pid} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                                <h5 className="modal-title first-cap" id="exampleModalLongTitle">Update for {this.props.pname}</h5>
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
                                    value={this.state.name} onChange={this.handleChange}
                                    name="name" id={this.props.pname}/> 
                                </div>
                                <div className="form-group">
                                    <label htmlFor={this.props.pprice} className="first-cap">Product Price</label>
                                    <input type="text" className="form-control"
                                    value={this.state.price} onChange={this.handleChange}
                                    name="price" id={this.props.pprice}/> 
                                </div>
                                <div className="form-group">
                                    <label htmlFor={this.props.pcategory} className="first-cap">Product Category</label>
                                    <input type="text" className="form-control"
                                    value={this.state.category} onChange={this.handleChange}
                                    name="category" id={this.props.pcategory} disabled/> 
                                </div>
                                <div className="form-group">
                                    <label className="first-cap">Product description</label>
                                    <textarea type="text" className="form-control"
                                    rows="4" column="4" onChange={this.handleChange}
                                    name="description" 
                                    value={this.state.description}>
                                    </textarea>
                                </div>
                            </form>
                        </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" onClick={this.updateProduct} className="btn btn-primary">Update Product</button>
                    </div>
                </div>
            </div>
        </td>
                </tr>
            </thead>
        )

    }
}

export default AdminProductDisp;