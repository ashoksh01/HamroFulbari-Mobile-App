import React, { Component } from 'react';
import '../css/frontend.css';
import Organic from '../images/organic.svg';
import Saving from '../images/saving.svg';
import Delivery from '../images/homedeliver.svg';

class Bodysection extends Component{

    render(){
        return(
            <section className="features-icons bg-light text-center bg-body">
               <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                            <img className="icon-layers m-auto text-primary" 
                            src={Organic} alt="organic brands"/>
                            </div>
                            <p className="mb-0 image-header">The best organic plants and flowers</p>
                            <p className="lead mb-0">Shop 6,000+ indoor/outdoor plants and flowers just for members</p>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                            <img className="icon-layers m-auto text-primary" 
                            src={Saving} alt="organic brands"/>
                            </div>
                            <p className="mb-0 image-header">The best saving deals</p>
                            <p className="lead mb-0">Enjoy reasonable prices, samples, and deals every day</p>
                        </div>
                        </div>
                        <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                            <img className="icon-layers m-auto text-primary" 
                            src={Delivery} alt="organic brands"/>
                            </div>
                            <p className="mb-0 image-header">Healthy without the Hassle</p>
                            <p className="lead mb-0">Fast and Free delivery with Pay on delivery service </p>
                        </div>
                        </div>
                    </div>
            </div>
            </section>
            
        );
    }
}

export default Bodysection;