import React from 'react';
import '../css/Contactus.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Footer from './Footer';
// import Navbar from './Navbar';


function Contactus() {
    return (
        <div className="main">
            {/* <Footer/> */}
            
      <div className="details">
        <h2 className="alt-heaing">Contact Form</h2>
        <br />
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Name </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Email </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="email"
            />
          </div><br></br>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Message </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div><br></br>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1"
              >Reporting an issue</label>
          </div><br></br>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div><br></br>

      <div className="text">
        <h1 className="heading">Contact Us</h1>
        <p>
          Fill out our contact form to get in touch with us. we will respond to
          your message as soon as possible. Please check the 'reporting an
          issue' box to report any issue you have faced with the website.
          <br />
          We hope you didn't have too much trouble. Please leave feedback of how
          your experience visiting our website was. Any queries regarding the
          website are more than welcome.
        </p>
        <p>
          <strong
            ><em>Details given will never be shared with anyone</em></strong
          >
        </p>
            </div>
            
            
{/* <Navbar/> */}
    </div>
  );
}


export default Contactus;