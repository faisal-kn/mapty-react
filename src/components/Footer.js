import React from "react";
import '../css/footer.css';
import image1 from "../images/logo.png"; 
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { img } from "react-bootstrap";
// import { ImagfooterWidgetHeadinge } from "react-bootstrap";
// import Button from 'react-bootstrap/Button';

function Footer() {
    return (<footer class="footer-section">
  <div class="container-footer">
    <div class="footer-cta pt-4 pb-5"></div>
    <div class="footer-content pt-5 pb-5">
      <div class="row">
        <div class="col-xl-4 col-lg-4 mb-50">
          <div class="footer-widget">
            <div class="footer-logo">
              <a href="/">
                <img
                  src={image1}
                  style={{ height:'25%', width:'25%', borderRadius:'5000px' }}
                  class="img-fluid"
                  alt="logo"
              /></a>
            </div>
            <div class="footer-text">
              <p>
                MAPTY is a website designed to get better and better 
                everyday. keep supporting us by sharing this platform as much as
                possible.
              </p>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-2 col-md-3 mb-30">
          <div class="footer-widget">
            <div class="footer-widget-heading">
              <h3>Useful Links</h3>
            </div>
            <ul className='footer'>
              {/* <% if(user){ %> */}

              <div>
              <li><a href="/userprofile">User Profile</a></li>
              {/* <% } else{ %> */}
              <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              </div>

              <div>
              <li><a href="/signup">Sign up</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/contactus">Contact Us</a></li>
              </div>
              
              {/* <li></li> */}
              {/* <% } %> */}
            </ul>
          </div>
        </div>
        <div class="col-xl-4 col-lg-2 col-md-3 mb-30">
          <div class="footer-widget">
            <div class="footer-widget-heading">
              <h3 style={{textAlign:"center"}}>Company</h3>
            </div>
            <ul>
              <div>
              <li><a href="/aboutus">About us</a></li>
              <li><a href="/contactus">Contact us</a></li>
              <li><a href="/newTeam">Teams</a></li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>  );
}

export default Footer;



