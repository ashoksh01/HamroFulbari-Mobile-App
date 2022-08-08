import React, { Component } from 'react';
import '../css/frontend.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import NotificationLopp from './notificationloop';
class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrayresp: 0,
            request: [],
            userid: localStorage.getItem('id'),
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/user/request/' + this.state.userid, this.state.config)
            .then((response) => {
                this.setState({
                    request: response.data

                })
            });

    }

    render() {
        const userReq = this.state.request.map((notifilist, index) => {
            return <NotificationLopp key={notifilist._id} reqid={notifilist._id}
                pname={notifilist.productname} pprice={notifilist.productprice}
                pqaun={notifilist.productquantity} puser={notifilist.userName}
                pcomment={notifilist.extracomment}
                padminres={notifilist.adminresponse} admincomment={notifilist.admincomment}
            />
        })
        return (
            <div className="testimonials text-center bg-light">
                <div className=" w-100">
                    <div className="panel panel-default shadow">
                        <div className="panel-heading">
                            <h3 className="fw-bold">Requests And Notification Panel</h3>
                        </div>
                        <div className="panel-body">
                            {userReq.length === 0 ?
                                <div className="alert alert-success">
                                    <strong className="default first-cap">
                                        {/* <button type="button" className="close" data-dismiss="alert" aria-hidden="true">×</button> */}
                                        <i className="fa fa-road"></i> Welcome {localStorage.getItem("name")}
                                    </strong><hr />
                                    <p>This is your admin Dashboard. Here you can
                                        <NavLink to="/products" className="notification-link"> browse store products </NavLink>
                                        or make a
                                        <NavLink to="/user/request" className="notification-link"> request for a product</NavLink>
                                        and
                                        <NavLink to="/user/cart" className="notification-link">  add to your cart </NavLink>
                                        We will be introducing more features and products soon. Stick around.
                                    </p>

                                </div>
                                :
                                userReq
                            }


                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Notification;