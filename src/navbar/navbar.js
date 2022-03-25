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
                <li>/ Brune<a href="#home"></a></li>
                <li>/ Bionde<a href="#about_us-link"></a></li>
                <li>/ More<a href="#services-link"></a></li>
                <li>/ Rosse<a href="#projects-link"></a></li>
                <li>/ Castane<a href="#contacts"></a></li>
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