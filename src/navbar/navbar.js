import './navbar.scss';
import { getEngb_text } from "../lingue/inglese";
import { Link } from "react-router-dom";
import Home from '../home/home';


export default function Navbar() {
  var engb_text = getEngb_text();
  return (
    <nav>
      <div className="container-custom-nav">
        <div className="nav-content">
          <div className="left-side">
            <div className="logo">
              <Link to="/" component={Home} className="carta">
                <img src="img/gecko-nav-v2.png" alt="" />
              </Link>
            </div>
          </div>
          <div className="right-side flex">
            <div className="nav-dropdown">
              <ul>
                {/* if (window.location.href=="address to check") {
                  console.log("success")
                } else {
                  console.log("fail")
                } */}
                <li><a href="#home">{engb_text.navbar.home}</a></li>
                <li><a href="#about_us-link">{engb_text.navbar.about_us}</a></li>
                <li><a href="#services-link">{engb_text.navbar.services}</a></li>
                <li><a href="#projects-link">{engb_text.navbar.portfolio}</a></li>
                <li><a href="#contacts">{engb_text.navbar.contacts}</a></li>
              </ul>
            </div>
            <div className="hamburger flex" onClick="openDropdown">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};