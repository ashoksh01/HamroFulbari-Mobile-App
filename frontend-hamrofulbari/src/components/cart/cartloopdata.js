import React from 'react';
import axios from 'axios';
import '../css/frontend.css';

class ProductRep extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            numproduct:this.props.pnumofitem,
            success:"", 
            error:"",
            subtotal:0,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    handleChange = (e, numproduct ) => {
        this.setState(
            { [e.target.name]: e.target.value})
    }

    stepDown = (e)=>{
        if(this.state.numproduct >= 0){
            e.preventDefault();
        }
        this.setState({ numproduct: this.state.numproduct - 1});
        if(this.state.numproduct<=0){
            this.setState({ numproduct: 0});
            e.preventDefault();
        }
    }   

    stepUp =(e)=>{
        e.preventDefault();
        this.setState({ numproduct: this.state.numproduct + 1 });
    }

    deleteCartItem = (e) =>{
        e.preventDefault();
        axios.delete('http://localhost:4000/carts/'+this.props.cid, this.state.config)
        .then(response=> {
            console.log(response.data.successmsg)
            this.setState({
                success:response.data.successmsg
            });
            setTimeout(function() {
                window.location.reload();
            }, 2000); 
          })
          .catch(error=>{            
            console.log(error.response)
            this.setState({
                error:"could not update cart"
            });  
            })
        }

        updateCart = (e) =>{
            e.preventDefault();
            const cartdata = {
                productnumber: this.state.numproduct,     
            };
            axios.put('http://localhost:4000/carts/'+this.props.cid, cartdata, this.state.config)
            .then(response=> {
                this.setState({
                    success:response.data.successmsg
                });
                setTimeout(function() {
                    window.location.reload();
                }, 1000); 
              })
              .catch(error=>{    
                this.setState({
                    error:"could not update cart"
                });        
                console.log(error.response)
                    alert(error.response);
                })
            }

    render(){  
        return(
            <tr>
                <td>
                    <img className="rounded-circle cart-image" 
                    src={`http://localhost:4000/productuploads/${this.props.pimage}`} 
                    alt={this.props.pname} />
                </td>
                <td className="cartdata first-cap">
                    {this.props.pname}
                </td>
                <td className="text-center cartdata">
                    {this.props.pprice}
                </td>
                <td className="cartdata">
                    <div className="def-number-input number-input safari_only">
                        <button onClick={this.stepDown} className="minus"></button>
                            <input type="number" name="productnumber" className="quantity" min="0"
                            value={this.state.numproduct} onChange={this.handleChange} />
                        <button onClick={this.stepUp} className="plus"></button>
                    </div>
                    <p className="alert alert-info" style={{ display: this.state.success!=="" ? "" : "none" }}>
                        {this.state.success}
                    </p>
                    <p className="alert alert-info" style={{ display: this.state.error!=="" ? "" : "none" }}>
                        {this.state.error}
                    </p>
                </td>
                <td className="text-center cartdata">
                    {this.props.pprice * this.state.numproduct}     
                 </td>
                <td className="text-center cartdata">
                    <button className="btn btn-sm btn-info" onClick={this.updateCart}>Update</button>
                </td>
                <td className="text-center cartdata">
                    <button className="btn btn-sm btn-danger" onClick={this.deleteCartItem}>Remove</button> 
                </td>
            </tr>
        )
    }
}

export default ProductRep;