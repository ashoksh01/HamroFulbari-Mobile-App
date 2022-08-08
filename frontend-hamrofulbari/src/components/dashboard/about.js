import React from 'react'
import '../css/aboutus.css';

const About = () => {
  return (
    <div>
        <section class="about-section">
            {/* <!-- about left  --> */}
            <div class="about-left image-section">
                <img src="../images/profile.png" />
            </div>

            {/* <!-- about right  --> */}
            <div class="about-right">
                <h2>HamroFulbari</h2>
                <h1>About Us</h1>
                <p>
                Having plants in our homes or our offices doesn’t just 
                look good, it also boosts our mood, makes us more productive,
                and cleans the air around us by absorbing toxins. Most of us being us
                urban dwellers spending our days in apartments with limited access to parks 
                and ecological reserves, have no way of feeling close to nature and experiencing 
                the benefits of being around plants. Ordering a pizza is easy but ever heard of ordering 
                a plant to your doorstep? This is where nursery life comes in.<br/> <br/>
                We believe that Green is Good and are here to enable Indians 
                to access plants in the easiest way possible – online! We are here 
                to shape the future of gardening. A one-stop-shop for all gardening-related 
                requirements, nursery live has more than 6000 products available online for delivery 
                across India saving you numerous messy trips to various nurseries. We cater to all kinds 
                of gardening needs ranging from plants, pots, and tools, to curated plant-scaping solutions. 
                Our ever-growing platform integrates nurseries and customers across India. 
                If you’re new to being a plant parent,
                we’re here to make it easier. Our garden experts can provide you with guidance for detailed 
                are every step of the way. Having served a network of 1 million happy plant parents, we
                can assure you that once you order a plant from us, you will emerge with your home-grown 
                veggies! We believe that every space can be made more beautiful with plants! Come, and 
                 oin us in our vision to make all spaces green and healthy! 

                </p>
                <div class="address">
                    <ul>
                        <li>
                            <span class="address-logo">
                                <i class="fas fa-paper-plane"></i>
                            </span>
                            <p>Address</p>
                            <span class="saprater">:</span>
                            <p>Dillibazar, Softwarica Marga, Kathmandu Nepal</p>
                        </li>
                        <li>
                            <span class="address-logo">
                                <i class="fas fa-phone-alt"></i>
                            </span>
                            <p>Phone No</p>
                            <span class="saprater">:</span>
                            <p>+91 987-654-4321</p>
                        </li>
                        <li>
                            <span class="address-logo">
                                <i class="far fa-envelope"></i>
                            </span>
                            <p>Email ID</p>
                            <span class="saprater">:</span>
                            <p>hamrofulbari2020@gmail.com</p>
                        </li>
                    </ul>
                </div>
                <div class="expertise">
                    <h3>Our Services</h3>
                    <ul>
                        <li>
                            <span class="expertise-logo">
                                
                            </span>
                            <p>Best Flower and Plants</p>
                        </li>
                        <li>
                            <span class="expertise-logo">
                                
                            </span>
                            <p>Flower and Plant Gifts</p>
                        </li>
                        <li>
                            <span class="expertise-logo">
                               
                            </span>
                            <p>Home Delivery</p>
                        </li>
                        <li>
                            <span class="expertise-logo">
                               
                            </span>
                            <p>Best Discount</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>


        
    </div>
  )
}

export default About
