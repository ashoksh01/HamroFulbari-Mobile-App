import React, { Component } from "react";
import "../css/userlogin.css";
import "../css/login.css";

import { NavLink, Redirect, Link } from "react-router-dom";
import axios from "axios";

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      success: "",
      error: "",
      email: "",
      password: "",
      loggedin: false,
      admin: false,
    };
  }

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

  registerUser = (e) => {
    e.preventDefault();
    const logindata = {
      email: this.state.email,
      password: this.state.password,
    };

    axios
      .post("http://localhost:4000/user/login", logindata)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("id", response.data.logininfo.id);
        localStorage.setItem("name", response.data.logininfo.fullname);
        localStorage.setItem("email", response.data.logininfo.email);
        localStorage.setItem("contact", response.data.logininfo.contactnum);
        localStorage.setItem("address", response.data.logininfo.address);
        localStorage.setItem("loginrole", response.data.logininfo.adminrole);
        localStorage.setItem("super", response.data.logininfo.superrole);
        this.setState({
          loggedin: true,
          admin: response.data.logininfo.adminrole,
        });
      })
      .catch((error) => {
        console.log(error.response.status);
        if (error.response.status === 404) {
          this.setState({
            error: "User credentials not found",
          });
        } else if (error.response.status === 400) {
          this.setState({
            error: "Email or password is incorrect. Try again!",
          });
        }
      });
  };

  render() {
    if (this.state.loggedin === true && this.state.admin === false) {
      return <Redirect to="/dashboard" />;
    } else if (this.state.loggedin === true && this.state.admin === true) {
      return <Redirect to="/admindashboard" />;
    }

    return (
      <div className="loginbody">
        <div class="logincontainer" id="logincontainer">
          <div class="loginform-container loginsign-in-container">
            <form action="#" class="loginform">
              <h1 class="loginh1">Sign in</h1>
              <div class="loginsocial-container ">
                <a href="#" class="loginsocial logina">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="loginsocial logina">
                  <i class="fab fa-google-plus-g"></i>
                </a>
                <a href="#" class="loginsocial logina">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span class="loginspan">or use your account</span>
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

              <input
                class="logininput"
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.emailHandle}
              />
              <input
                class="logininput"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.passwordHandle}
              />
              <a class="logina" href="#">
                Forgot your password?
              </a>
              <button
                onClick={this.registerUser}
                class="loginbutton loginghost"
              >
                Sign In
              </button>
            </form>
          </div>
          <div class="loginoverlay-container">
            <div class="loginoverlay">
              <div class="loginoverlay-panel loginoverlay-left">
                <h1 class="loginh1">Welcome Back!</h1>
                <p class="loginp">
                  To keep connected with us please login with your personal info
                </p>
                <button class="loginghost loginbutton" id="signIn">
                  Sign In
                </button>
              </div>
              <div class="loginoverlay-panel loginoverlay-right">
                <h2 class="loginh1">Hello, Friend</h2>
                <h2 class="loginh1">Welcome Back!</h2><br/>
                <p class="loginpl">
                  Enter your personal details and start journey with
                  Hamrofulbari🍀🥀🍀
                </p> <br/>  
                <div>
                  <Link class="loginghost loginal" to="/register" id="signUp"> Don't have an account?</Link>
                    
             
                </div>
                <br />
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
    );
  }
}

export default UserLogin;
