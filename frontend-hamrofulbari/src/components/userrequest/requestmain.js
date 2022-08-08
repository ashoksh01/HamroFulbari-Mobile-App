import React, { Component } from 'react';
import DashMainHeader from '../dashboard/dashheader';
import RequestBody from './requestbody';
import GeneralFooter from '../dashboard/generalfooter';

class UserRequest extends Component{

    render(){
        return(
            <div>
                <DashMainHeader/>
                <header className="requesthead text-white text-center container ">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <h1 className="mb-5 header-capital">
                                Request A product you want us to add to our store
                                </h1>
                            </div>
                        </div>
                    </div>
                </header>
                <RequestBody/>
                <GeneralFooter/>
            </div>
        );
    }
}

export default UserRequest;