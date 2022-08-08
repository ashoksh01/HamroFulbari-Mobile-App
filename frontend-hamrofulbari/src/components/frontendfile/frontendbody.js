import React, { Component } from "react";
import "../css/frontend.css";
import "../css/carouselface.css";
import "../css/texthome.css";
import LowerBody from "./bodysections";
import ProductList from "../products/productdatadisp";
import axios from "axios";

class FrontendBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      config: {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      },
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/products", this.state.config)
      .then((response) => {
        this.setState({
          products: response.data,
        });
      });
  }
  render() {
    const allproduct = this.state.products.map((prolist, index) => {
      return (
        <ProductList
          key={prolist._id}
          pid={prolist._id}
          pname={prolist.name}
          pprice={prolist.price}
          pcategory={prolist.category}
          pimage={prolist.image}
          pdescription={prolist.description}
        />
      );
    });

    return (
      <>
        <section>
          <div></div>
          <p class=" animate-charcter tanimate-char tbody tp">
            Join with us and grow the nature together
          </p>
          <div class="carcontainer">
            <div class="carcarousel">
              <div class="carcarousel__face">
                {/* <span class="carspan">This is something</span> */}
              </div>
              <div class="carcarousel__face">
                {/* <span class="carspan">Very special</span> */}
              </div>
              <div class="carcarousel__face">
                {/* <span class="carspan">Special is the key</span> */}
              </div>
              <div class="carcarousel__face">
                {/* <span class="carspan">For you</span> */}
              </div>
              <div class="carcarousel__face">
                {/* <span class="carspan">Just give it</span> */}
              </div>
              <div class="carcarousel__face">
                {/* <span class="carspan">A try</span> */}
              </div>
              <div class="carcarousel__face">
                {/* <span class="carspan">And see</span> */}
              </div>
              <div class="carcarousel__face">
                {/* <span class="carspan">How IT Works</span> */}
              </div>
              <div class="carcarousel__face">
                {/* <span class="carspan">Woow</span> */}
              </div>
            </div>
          </div>
        </section>

        <section class="pt-5 pb-2">
          <div class="ccontainer">
            

            {/* //////////////////// plants//////////////// */}

            <div class="row">

              <div class="col-6">
              </div>
             
              <div class="col-12">
                <div
                  id="carouselExampleIndicators2"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                <h3 class="mb-3 display-6">Popular Plants and Flowers Item 😍</h3>

                      <section className="testimonials text-center bg-light">
                        <div className="container">
                          
                          <div className="row">{allproduct}</div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section class="testimonial manbody">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 d-none d-lg-block">
                    <ol class="carousel-indicators tabs">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">
                            <figure>
                                <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png" class="img-fluid" alt=""/>
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1">
                            <figure>
                                <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png" class="img-fluid" alt=""/>
                            </figure>
                        </li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2">
                            <figure>
                                <img src="https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png" class="img-fluid" alt=""/>
                            </figure>
                        </li>
                    </ol>
                </div>
                <div class="col-lg-6 d-flex justify-content-center align-items-center">
                    <div id="carouselExampleIndicators" data-interval="false" class="carousel slide" data-ride="carousel">
                        <h3>WHAT OUR CLIENTS SAY</h3>
                        <h1>HamroFulbari</h1>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="quote-wrapper">
                                    <p>I have tried a number of websites that provide flower and plant delivery services, but HamroFulbari is incredible! I suggest this business to every one of my friends since their plants and flowers are great for gifting and are incredibly healthy for outdoor, indoor, and office purposes.</p>
                                    <h3>Ashok Shrestha</h3>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="quote-wrapper">
                                    <p>I have tried a number of websites that provide flower and plant delivery services, but HamroFulbari is incredible! I suggest this business to every one of my friends since their plants and flowers are great for gifting and are incredibly healthy for outdoor, indoor, and office purposes.</p>
                                    <h3>Ritika Dangol</h3>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="quote-wrapper">
                                    <p>I have tried a number of websites that provide flower and plant delivery services, but HamroFulbari is incredible! I suggest this business to every one of my friends since their plants and flowers are great for gifting and are incredibly healthy for outdoor, indoor, and office purposes.</p>
                                    <h3>Bimal Shrestha</h3>
                                </div>
                            </div>
                        </div>
                        <ol class="carousel-indicators indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>

        <LowerBody />
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2022 Hamrofulbari plants and flowers Store Shopping.
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Front Panel | Hamro Fulbari
            </span>
          </div>
        </footer>
      </>
    );
  }
}

export default FrontendBody;
