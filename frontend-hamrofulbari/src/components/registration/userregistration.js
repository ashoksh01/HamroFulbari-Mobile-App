import React, { Component } from "react";
import "../css/userlogin.css";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

class UserRegistration extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      email: "",
      password: "",
      contactnum: "",
      address: "",
      success: "",
      error: "",
    };
  }

  fullnameHandle = (event) => {
    this.setState({
      fullname: event.target.value,
    });
  };
  emailHandle = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  passwordHandle = (event) => {
    this.setState({
      password: event.target.value,
    });
  };
  contactHandle = (event) => {
    this.setState({
      contactnum: event.target.value,
    });
  };
  addressHandle = (event) => {
    this.setState({
      address: event.target.value,
    });
  };

  registerUser = () => {
    const userdata = {
      fullname: this.state.fullname,
      email: this.state.email,
      password: this.state.password,
      contactnum: this.state.contactnum,
      address: this.state.address,
    };

    axios
      .post("http://localhost:4000/user/registration", userdata)
      .then((response) => {
        this.setState({
          success: response.data.successmsg,
        });
        setTimeout(function () {
          //navigate to login page
          window.location.href = "/login";
        }, 2000);
      })
      .catch((error) => {
        if (error.response.data.status === 403) {
          this.setState({
            error: error.response.data,
          });
        } else {
          this.setState({
            error: "Please insert the data first!",
          });
        }

        console.log(error.response.data.errmsg);
      });
  };

  render() {
    return (
      <>
        <div className="loginbody">
          <div class="logincontainer" id="logincontainer">
            <div class="loginform-container loginsign-in-container">
              <form action="#" class="loginform">
                <div
                  className="alert alert-info"
                  style={{ display: this.state.success !== "" ? "" : "none" }}
                >
                  {this.state.success}
                </div>
                <div
                  className="alert alert-danger"
                  style={{ display: this.state.error !== "" ? "" : "none" }}
                >
                  {this.state.error}
                </div>
                <h1 class="loginh1">Account</h1>

                <input
                  class="logininput"
                  type="text"
                  placeholder=" Full Name"
                  value={this.state.fullname}
                  onChange={this.fullnameHandle}
                />
                <input
                  class="logininput"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.emailHandle}
                />
                <input
                  class="logininput"
                  type="text"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.passwordHandle}
                />
                <input
                  class="logininput"
                  type="contact"
                  placeholder="Contact"
                  value={this.state.contactnum}
                  onChange={this.contactHandle}
                />
                <input
                  class="logininput"
                  type="text"
                  placeholder="Address"
                  value={this.state.address}
                  onChange={this.addressHandle}
                />

                <button
                  class="loginbutton loginghost mt-4"
                  onClick={this.registerUser}
                >
                  Sign Up ☘
                </button>
              </form>
            </div>
            <div class="loginoverlay-container">
              <div class="loginoverlay">
                <div class="loginoverlay-panel loginoverlay-right">
                  <h1 class="loginh1">Are You New🤗🤗🤗</h1>
                  <br />
                  <p class="loginpl">
                    Enter your personal details and start journey with
                    Hamrofulbari🍀🥀🍀
                  </p>
                  <br />
                  <div>
                    <Link class="loginghost loginal" id="signUp " to={"/login"}>
                      Already Have Account ?
                    </Link>
                    <br />
                  </div>
                  <br />
                  <div>
                    <div>
                      <Link to="/">
                        <button class="loginghost loginbutton" id="signUp ">
                          Go to Homepage
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default UserRegistration;
