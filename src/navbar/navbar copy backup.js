import './navbar.scss';
import { getEngb_text } from "../lingue/inglese";
import { Link, useLocation } from "react-router-dom";
import Home from '../home/home';



export default function Navbar() {
  var engb_text = getEngb_text();

  const location = useLocation();

  function openServices() {
    console.log("openServices");
    console.log(this);
    var element = document.getElementById("servicesMenu");
    element.classList.add("active");
    /* element.addClass("active"); */
    /*this(".nav-dropdown").toggleClass("active");
    this(".line1, .line2, .line3").toggleClass("active");
    this(".dropdown-services").removeClass("servicesMenu");
    this("body").toggleClass("fixed");
    this("#caret").removeClass("rotate");

    this(".dropdown-services").toggle();
    this("#caret").toggleClass("rotate"); */
  }
  function openMenuServices() {
    console.log("openMenuServices");
    /*this(".nav-dropdown").toggleClass("active");
    this(".line1, .line2, .line3").toggleClass("active");
    this(".dropdown-services").removeClass("servicesMenu");
    this("body").toggleClass("fixed");
    this("#caret").removeClass("rotate");

    this("#servicesMenu").toggle();
    this(".dropdown-services").toggleClass("servicesMenu");
    this("#caret").toggleClass("rotate"); */
  }

/* 
import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: true,
    });
  } */

  function sayHello() {
    alert('You clicked me!');
  }

  return (
    <nav>
      <div className="container-custom-nav">
        <div className="nav-content">
          <div className="left-side">
            <div className="logo">
              {location.pathname === "/" 
                ? 
                <a href="#home">
                  <img src="img/gecko-nav-v2.png" alt="" />
                </a>
                :
                <Link to="/" component={Home} className="carta">
                  <img src="img/gecko-nav-v2.png" alt="" />
                </Link>
              }
            </div>
          </div>
          <div className="right-side flex">
            <div className="nav-dropdown">
              
              <ul>
                {location.pathname === "/" ? ""/*<a href="#home">{engb_text.navbar.home}</a>*/ : <li><Link to="/">{engb_text.navbar.home}</Link></li>}
                <li><a href="#about_us-link">{engb_text.navbar.about_us}</a></li>
                {location.pathname === "/" 
                  ?
                  <li><a href="#services-link">{engb_text.navbar.services}</a></li>
                  : 
                  <li className="nowrap"><span id="servicesMenu" onClick={sayHello} /*onClick={openMenuServices}*/ /*onClick={openServices}*/>{engb_text.navbar.services}<i id="caret" className="fas fa-angle-down"></i></span>
                    <div className="dropdown-services" onClick={openServices}>
                      <ul>
                        <li>/<a href="./#services-link">All services</a></li><hr/>
                        <li>/<a href="{{route('services', ['service' => 'full'])}}">{engb_text.minimenuservizi.full}</a></li><hr/>
                        <li>/<a href="{{route('services', ['service' => 'website-services'])}}">{engb_text.minimenuservizi.indivisuals}</a></li><hr/>
                        <li>/<a href="{{route('services', ['service' => 'website-company'])}}">{engb_text.minimenuservizi.companies}</a></li><hr/>
                        <li>/<a href="{{route('services', ['service' => 'creative'])}}">{engb_text.minimenuservizi.design}</a></li><hr/>
                        <li>/<a href="{{route('services', ['service' => 'support'])}}">{engb_text.minimenuservizi.support}</a></li><hr/>
                        <li>/<a href="{{route('services', ['service' => 'content-creation'])}}">{engb_text.minimenuservizi.content}</a></li><hr/>
                        <li>/<a href="{{route('services', ['service' => 'marketing'])}}">{engb_text.minimenuservizi.marketing}</a></li><hr/>
                      </ul>
                    </div>
                  </li>
                }
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