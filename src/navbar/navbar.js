import React from "react";
import './navbar.scss';

function Navbar() {
  return (
    <nav>
      <div className="container-custom-nav">
        <div className="nav-content">
          <div className="left-side">
            <div className="logo">
              <a href="homepage">
                <img src="img/gecko-nav-v2.png" alt="" />
              </a>
            </div>
          </div>
          <div className="right-side flex">
            <div className="nav-dropdown">
              <ul>
                <li><a href="#home">/ HOME</a></li>
                <li><a href="#about_us-link">/ ABOUT US</a></li>
                <li><a href="#services-link">/ SERVICES</a></li>
                <li><a href="#projects-link">/ PORTFOLIO</a></li>
                <li><a href="#contacts">/ CONTACTS</a></li>
              </ul>
            </div>
            <div class="hamburger flex" onClick="openDropdown">
              <div class="line1"></div>
              <div class="line2"></div>
              <div class="line3"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;