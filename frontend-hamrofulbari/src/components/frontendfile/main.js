import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../css/frontend.css";
import { NavLink } from "react-router-dom";
import FrontBody from "./frontendbody";
import LoginMain from "../login/userlogin";
import DashboardMain from "../dashboard/dashboard";
import AdminDashboardMain from "../dashboard/admin/admindashboard";
import ProductBody from "../products/productsbody";
import RegisterMain from "../registration/userregistration";
import RouteRes from "../routerestrict/restrict";
import AddProducts from "../dashboard/admin/adminproducts/productsadd";
import ViewProducts from "../dashboard/admin/adminproducts/viewproducts";
import AdminProfile from "../dashboard/admin/adminprofile/updateprofile";
import UpdateProfile from "../dashboard/admin/adminprofile/updateprofile";
import MainUserCart from "../cart/cart";
import RegisterAdmin from "../dashboard/admin/newuser/newadmin";
import UserRequest from "../userrequest/requestmain";
import UserList from "../dashboard/admin/newuser/userlist";

// import "../css/social.css";
import "../css/nav.css";
import Profile from "../dashboard/Profile";
import About from "../dashboard/about";
import Contact from "../dashboard/contactus";



class MainFront extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/login" exact component={LoginContainer} />
          <Route path="/register" exact component={LoginContainer} />
          {/* links for login */}
          <RouteRes path="/dashboard" component={DashboardMain} />
          <RouteRes path="/admindashboard" component={AdminDashboardMain} />
          <RouteRes path="/addproducts" component={AddProducts} />
          <RouteRes path="/viewproducts" component={ViewProducts} />
          <RouteRes path="/admin/profile/:id" component={AdminProfile} />
          <RouteRes path="/admin/profileupdate/:id" component={UpdateProfile} />
          <RouteRes path="/user/cart" component={MainUserCart} />
          <RouteRes path="/registeradmin" component={RegisterAdmin} />
          <RouteRes path="/user/request" component={UserRequest} />
          <RouteRes path="/view/alluser" component={UserList} />
       
          {/* end */}
          <Route path="/" exact component={DefaultContainer} />
          <Route path="/products" exact component={ProductBody} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/contactus" exact component={Contact} />
          <Route path="/about" exact component={About} />
         
        </Switch>
      </div>
    );
  }
}

const LoginContainer = () => (
  <div>
    <nav className="navbar navbar-light bg-light sticky-top"></nav>
    <Route path="/login" exact component={LoginMain} />
    <Route path="/register" exact component={RegisterMain} />
  </div>
);

const DefaultContainer = () => (
  <div className="container">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        <h4 class="logofulbari hamrofulbari loginh1">HamroFulbari</h4>
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mt-4 mt-lg-0 ">
          <li className="nav-item">
            <NavLink className="navbar-brand sub-navlink" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navbar-brand sub-navlink" to="/about">
              About us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="navbar-brand sub-navlink" to="/contactus">
              Contact us
            </NavLink>
          </li>

          <li>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="fa fa-user" aria-hidden="true"></i>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li className="nav-item">
                  <NavLink className="dropdown-item nav-hover" to="/login">
                    <i class="fa fa-sign-in" aria-hidden="true"></i> Sign In
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="dropdown-item nav-hover" to="/register">
                    <i class="fa fa-user-plus" aria-hidden="true"></i>Sign up
                  </NavLink>
                </li>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <Route path="/" exact component={FrontBody} />
  </div>
);

export default MainFront;
