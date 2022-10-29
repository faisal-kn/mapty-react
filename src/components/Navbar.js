import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css'
import { Link } from 'react-router-dom';

function header() {
    return (
<div> <nav
      class="navbar navbar-expand-lg navbar-light position"
      style={{backgroundColor: 'bisque'}}
    >
      <div class="nav-logo">
        <a href="/"
          ><img src="project-app\public\logo.png" class="img-fluid" alt="logo"
        /></a>
      </div>
        <a class="navbar-brand" style={{ paddingLeft: '20px' }} href='/'>Mapty</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle n    avigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
     

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mg-lg-0 pt-1">
          <li class="nav-item active">
            <a class="nav-link" href="/">Home<span class="sr-only"></span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/events">Events</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/aboutus">About us</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/contactus">Contact us</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="/newTeam">Our team</a>
          </li>

          {/* <div class="nav-logo" style={{paddingLeft: '10px', paddingRight: '10px'}}>
            <a href="/userprofile"
              ><img
                src="/uploads/<%= user.photo %>"
                class="img-fluid"
                alt="icon"
            /></a>
          </div>
         */}
        </ul>
      </div>
    </nav>

    <script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
            ></script>
 </div>

 );
}

export default header;