import React, { Component } from 'react';
import DashMainHeader from '../dashboard/dashheader';
import Plantitems from './plantitems';
import GeneralFooter from '../dashboard/generalfooter';

class ProductBody extends Component{

    render(){
        return(
            <div>
                <DashMainHeader/>
                <header className="producthead text-white text-center container">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <h1 className="mb-5 header-capital">
                                Fresh best Plants and Flowers Product available here</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <Plantitems/>
                <GeneralFooter/>
            </div>
        );
    }
}

export default ProductBody;