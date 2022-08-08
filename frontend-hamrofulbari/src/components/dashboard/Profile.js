import React from "react";
import "../css/profile.css";
import { NavLink, Redirect, Link } from "react-router-dom";
import axios from "axios";

const Profile = () => {
  // get name from local storage
  const name = localStorage.getItem("name");
  const address = localStorage.getItem("address");
  const contact = localStorage.getItem("contact");
  const email = localStorage.getItem("email");


  const [nameState, setNameState] = React.useState(name);
  const [addressState, setAddressState] = React.useState(address);
  const [contactState, setContactState] = React.useState(contact);

  // use state to old password and new password
  const [oldPassword, setOldPassword] = React.useState('')
  const [newPassword, setNewPassword] = React.useState('')

  // use state to show error message
  const [error, setError] = React.useState('')
  

  // change password form axios
  const changePasswordAPI = (e) => {
    e.preventDefault();
    const data = {
      oldpassword: oldPassword,
      newpassword: newPassword
    }
    axios.put('http://localhost:4000/user/changepassword', data, {headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
      .then(res => {
        setError("Password changed successfully")
        console.log(res.data);
      }
      ).catch(err => {
        setError("Something went wrong")
        console.log(err);
      })
  }





  return (
    <>
      <div class="page-content page-container" id="page-content">
        <div class="padding">
          <div class="row container d-flex justify-content-center">
            <div class="col-xl-6 col-md-12">
              <div class="card user-card-full">
                <div class="row m-l-0 m-r-0">
                  <div class="col-sm-4 bg-c-lite-green user-profile">
                    <div class="card-block text-center text-white">
                      <div class="m-b-25">
                        <img
                          src="https://img.icons8.com/bubbles/100/000000/user.png"
                          class="img-radius"
                          alt="User-Profile-Image"
                        />
                      </div>
                      <h6 class="f-w-600">{name}</h6>

                      <i class=" fa fa-edit"></i>

                      <div>
                        <h5 className="form-group">Edit Your General Details Here</h5>
                        <form className="forms-sample">
                          <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" className="form-control" name="fullname"

                              id="fullname" placeholder={nameState} autoCapitalize="true" autoFocus />
                          </div>
                          <div className="form-group">
                            <label htmlFor="contactnum">Contact</label>
                            <input type="text" className="form-control" name="contactnum"

                              id="contactnum" placeholder={contactState} />
                          </div>
                          <div className="form-group">
                            <label htmlFor="address">Address</label>
                            <input type="text" className="form-control" name="address"

                              id="address" placeholder={addressState} autoCapitalize="true" />
                          </div>

                          <button className="loginbutton loginghost mt-4">Update</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div class="col-sm-8">
                    <div class="card-block">
                      <Link to="/dashboard"><button class="btn btn-success btn-icon-text btn-rounded mt-4 mb-4" type="button" >
                        Back
                      </button></Link>


                      <h6 class="m-b-20 p-b-5 b-b-default f-w-600">
                        Information
                      </h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Name</p>
                          <h6 class="text-muted f-w-400">{name}</h6>
                        </div>

                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Email</p>
                          <h6 class="text-muted f-w-400">{email}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Phone</p>
                          <h6 class="text-muted f-w-400">{contact}</h6>
                        </div>
                        <div class="col-sm-6">
                          <p class="m-b-10 f-w-600">Address</p>
                          <h6 class="text-muted f-w-400">{address}</h6>
                        </div>
                      </div>
                      <h6 class="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">
                        Edit Profile
                      </h6>
                      <div class="row">
                        <div class="col-sm-6">
                          <form action="#" class="loginform loginbody ">
                            <h5 class="loginh1">Change Password</h5>
                            <div>

                            </div>
                            <div class="row">
                              <input
                                onChange={(e) => setOldPassword(e.target.value)}
                                class="logininput"
                                type="password"
                                placeholder=" old password"
                              />
                              <input
                                onChange={(e) => setNewPassword(e.target.value)}
                                class="logininput"
                                type="password"
                                placeholder="new password"
                              />
                            </div>

                            {
                              error && <div>{error}</div>
                            }

                            <button onClick={changePasswordAPI} class="loginbutton loginghost mt-4">
                              Change
                            </button>
                          </form>
                          {/* <h6 class="text-muted f-w-400">Dinoter husainm</h6> */}
                        </div>
                      </div>
                      <ul class="social-link list-unstyled m-t-40 m-b-10">
                        <li class="solli">
                          <a class="sola" href="#">
                            <i class="fab fa-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="solli">
                          <a class="sola" href="#">
                            <i class="fab fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="solli">
                          <a class="sola" href="#">
                            <i
                              class="fab fa-google-plus-g"
                              aria-hidden="true"
                            ></i>
                          </a>
                        </li>
                        <li class="solli">
                          <a class="sola" href="#">
                            <i class="fab fa-linkedin" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="solli">
                          <a class="sola" href="#">
                            <i class="fab fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
