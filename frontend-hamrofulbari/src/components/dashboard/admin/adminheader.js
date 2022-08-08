import React, { Component } from "react";
import { withRouter, NavLink } from "react-router-dom";
import "../../css/adminheader.css";
import axios from "axios";
import { Link } from "react-router-dom";

class DashHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      user: [],
      config: {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    };
  }

  logoutHandle = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };

  componentDidMount() {
    axios
      .get(
        "http://localhost:4000/userprofile/uno/" + localStorage.getItem("id"),
        this.state.config
      )
      .then((res) => {
        console.log(res.data);
        this.setState({
          fullname: res.data.fullname,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light container">
        <NavLink className="navbar-brand brand-logo mr-5" to="/admindashboard">
          <span>Hamrofulbari Admin Panel🍀🥀🍀 </span>
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
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item">
              <NavLink to="/admindashboard" className="nav-link">
                User Request
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/viewproducts" className="nav-link">
                Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/view/alluser" className="nav-link">
                User List
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle nav-hover"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {this.state.fullname}
              </span>
              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <NavLink
                  className="dropdown-item nav-hover"
                  to={"/admin/profile/" + localStorage.getItem("id")}
                >
                  <i class="fa fa-user" aria-hidden="true"></i>
                  Your profile
                </NavLink>

                <div className="dropdown-divider"></div>
                <span
                  className="dropdown-item nav-hover"
                  onClick={this.logoutHandle}
                >
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                  Logout
                </span>
              </div>
            </li>
            {/* <li className="nav-item nav-profile">
              <img src={Logout} onClick={this.logoutHandle} alt="profile"/>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}
export default withRouter(DashHeader);
