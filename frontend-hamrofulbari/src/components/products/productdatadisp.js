import React from 'react';
import axios from 'axios';

class ProductRep extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            productid:this.props.pid,
            productname:this.props.pname,
            productprice:this.props.pprice,
            productcategory:this.props.pcategory,
            productimage:this.props.pimage,
            addedbyName:localStorage.getItem('name'),
            addedbyID:localStorage.getItem('id'),
            categortrec: this.props.pcategory === "common"  ? "/ item": "",
            success:"", 
            error:"",
            numproduct:0, 
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

    stepDown = (e)=>{
        if(this.state.numproduct >= 0){
            e.preventDefault();
        }
        this.setState({ numproduct: this.state.numproduct - 1 });
        if(this.state.numproduct<=0){
            this.setState({ numproduct: 0});
            e.preventDefault();

        }
    }

    stepUp =(e)=>{
        e.preventDefault();
        this.setState({ numproduct: this.state.numproduct + 1 });
    }

    cartAdd = (e) =>{
        e.preventDefault();
        if(this.state.numproduct <= 0){
            this.setState({
                error:"Please Choose Product Quantity first"
            });
            setTimeout(function() {
                window.location.reload()
                }, 1000);
        }else{    
        let cartDetails = {
                productid:this.state.productid,
                productname:this.state.productname,
                productprice: this.state.productprice,
                productcategory:this.state.productcategory,
                productnumber:this.state.numproduct,
                addedbyName:this.state.addedbyName,
                addedbyID:this.state.addedbyID,
                productimage:this.state.productimage
            }
            axios.post('http://localhost:4000/carts', cartDetails, this.state.config)
            .then(response=> {
            console.log(response.data.successmsg)            
                // window.location.reload();
                this.setState({
                    success:response.data.successmsg
                });
                setTimeout(function() {
                    window.location.reload()
                }, 2000);
            })
            .catch(error=>{   
                this.setState({
                    error:"Something went wrong. Try again!"
                });
                console.log(error.response.data.errmsg)
            });
      }
    }
   
    render(){    
        return(
            <div className="col-lg-4">
                <div className="alert alert-info" style={{ display: this.state.success!=="" ? "" : "none" }}>
                        {this.state.success}
                </div>
                <div className="alert alert-danger" style={{ display: this.state.error!=="" ? "" : "none" }}>
                        {this.state.error}
                </div>
                <div className="testimonial-item mx-auto mb-5 mb-lg-0 shadow p-3">
                    <img className="img-fluid proimg mb-3" 
                        src={`http://localhost:4000/productuploads/${this.props.pimage}`}  alt={this.props.pname} />
                        <h5>{this.props.pname} | Nrs.{this.props.pprice} {this.state.categortrec} </h5>
                    <p className="font-weight-light mb-0">{this.props.pdescription}</p>
                    <div className="font-weight-light mb-0">
                        <form>
                            <div className="def-number-input number-input safari_only">
                                <button onClick={this.stepDown}className="minus"></button>
                                    <input type="number" name="productnumber" className="quantity" min="0"
                                     value={this.state.numproduct} onChange={this.handleChange} />
                                <button onClick={this.stepUp} className="plus"></button>
                            </div>
                            <input type="submit" className="btn btn-primary btn-cart" onClick={this.cartAdd} value="Add to cart"/>
                        </form>
                    </div>    
                </div>
          </div>
        )

    }
}

export default ProductRep;