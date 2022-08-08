import React, { Component } from 'react';
import '../css/frontend.css';
import Notification from './notification';
import GeneralFooter from './generalfooter';

class DashBody extends Component {
    render() {
        return (
            <div className="admincard container">
                <header className="dashhead text-white text-center">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 mx-auto">
                                <h1 className="mb-5 hdr-txt">
                                    Welcome to Your HamroFulbari Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <Notification />
                <GeneralFooter />
            </div>
        );
    }
}

export default DashBody;