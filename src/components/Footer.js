import React from "react";
import '../css/footer.css';
import image1 from "../images/logo.png"; 
import {Link} from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/auth-context";

function Footer() {
  const ctx = useContext(AuthContext);

    return (<footer class="footer-section">
  <div class="container-footer">
    <div class="footer-cta pt-4 pb-5"></div>
    <div class="footer-content pt-5 pb-5">
      <div class="row">
        <div class="col-xl-4 col-lg-4 mb-50">
          <div class="footer-widget">
            <div class="footer-logo">
              <Link to="/">
                <img
                  src={image1}
                  style={{ height:'25%', width:'25%', borderRadius:'5000px' }}
                  class="img-fluid"
                  alt="logo"
              /></Link>
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

              {!ctx.isLoggedIn && (<div>
              <li><Link to="/">Home</Link></li>
              {/* <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/ourteam">Our Team</Link></li> */}
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Sign up</Link></li>
              <li><Link to="/adminportal">Admin Portal</Link></li>
              </div>)}
              
              {ctx.isLoggedIn && (<div>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/userprofile">User Profile</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/adminportal">Admin Portal</Link></li>
              </div>)}
              
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
              <li><Link to="/aboutus">About us</Link></li>
              <li><Link to="/contactus">Contact us</Link></li>
              <li><Link to="/newTeam">Teams</Link></li>
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



