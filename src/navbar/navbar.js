import './navbar.scss';
import { getEngb_text } from "../lingue/inglese";
import { Link, useLocation } from "react-router-dom";


import { useState } from 'react';


export default function Navbar() {
  var engb_text = getEngb_text();

  // SERVE PER I DISCORSI DI PATH DEI LINK
  const location = useLocation();



  function caretdownServizi(params) {
    // CARRET DOWN CHE GIRA
    var freccia = document.getElementById("caret")
    freccia.classList.toggle("rotate");
    
    // MENU A TENDINA CHE SCENDE O ENTRA DI LATO CON IL DISPLAY DEL TELEFONO
    var tendina = document.getElementsByClassName("dropdown-services")
    tendina[0].classList.toggle("servicesMenu")
    // come faccio che il menu si chiude a ogni click?
    /* document.addEventListener('click', function () {
      if (tendina[0].classList.has("servicesMenu")) {
        tendina[0].classList.remove("servicesMenu")
      }
    }); */
    /* document.addEventListener('click', function (event) {
      const isClickInsideElement = tendina[0].contains(event.target);
      if (!isClickInsideElement && tendina[0].classList.contains('servicesMenu')) {
        tendina[0].classList.remove('servicesMenu');
      }
    }); */
  }


  /////// CI SONO RIUSCITO MA VA PERFEZIONATA
  var closethings = document.querySelectorAll("li")/* .addEventListener("click", burgherMenu); */
  if (closethings[1] == undefined) {
    console.log("non funziona il targhettamento per le chiusure del menu a tendina da perfezionare");
  } else {
    console.log(closethings[1]);
  }
  // for (let i = 0; i < closethings.length; i++) {
  //   closethings[i].addEventListener("click", burgherMenu);
  // }

  
  function burgherMenu() {
    // BURGHER MENU CHE FA LA X
    var xMenu = document.querySelectorAll(".line1, .line2, .line3")
    for (let i = 0; i < xMenu.length; i++) {
      xMenu[i].classList.toggle("active")
      /* console.log(xMenu[i]); */
    }

    // var pippo = document.getElementsByClassName('nav-dropdown')
    // /* console.log(pippo); */
    // pippo[0].classList.toggle("active")
    
    
    // per chiudere il menu dei servizi
    var freccia = document.getElementById("caret")
    freccia.classList.remove("rotate");
    var tendina = document.getElementsByClassName("dropdown-services")
    tendina[0].classList.remove("servicesMenu")
  }
  
  
  
  
 /*  var carretDownServizi = document.getElementById("servicesMenu") */
 /*  console.log(carretDownServizi[0]); */


  // TARGHETTAZIONE BURGHER MENU
  var targhetBurgherMenu = document.getElementsByClassName("hamburger")
  /* console.log(targhetBurgherMenu); */
  if (targhetBurgherMenu[0] == undefined) {
    console.log("non funziona il targhettamento per il burghermenu");
  } else {
    /* console.log(targhetBurgherMenu[0]); */
    targhetBurgherMenu[0].addEventListener("click", animazioneBurgherMenu);  
  }
  setTimeout(targhetBurgherMenu[0].addEventListener("click", animazioneBurgherMenu), 5000)
  function animazioneBurgherMenu() {
    console.log("targhettazione click avvenuta con successo");
    // BURGHER MENU ANIMAZIONE X
    var xMenu = document.querySelectorAll(".line1, .line2, .line3")
    for (let i = 0; i < xMenu.length; i++) {
      /* console.log(xMenu[i]); */
      xMenu[i].classList.toggle("active")
    }
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
                <Link to="/" className="carta">
                  <img src="img/gecko-nav-v2.png" alt="" />
                </Link>
              }
            </div>
          </div>
          <div className="right-side flex">
            <div className="nav-dropdown">
              <ul>
                {location.pathname === "/" 
                  ? ""/*<a href="#home">{engb_text.navbar.home}</a>*/ 
                  : <li><Link to="/">{engb_text.navbar.home}</Link></li>}
                <li><a href="./#about_us-link">{engb_text.navbar.about_us}</a></li>
                {location.pathname === "/" 
                  ? <li><a href="#services-link">{engb_text.navbar.services}</a></li>
                  : 
                  <li className="nowrap">
                    <span id="servicesMenu" /*onClick={caretdownServizi}*/>{engb_text.navbar.services}
                      <i id="caret" className="fas fa-angle-down"></i>
                    </span>
                    <div className="dropdown-services">
                      <ul>
                        <li>/<a href="/#services-link">{engb_text.minimenuservizi.all}</a></li><hr/>
                        <li>/<Link to="/full" >{engb_text.minimenuservizi.full}</Link></li><hr/>
                        <li>/<Link to="/individuals">{engb_text.minimenuservizi.indivisuals}</Link></li><hr/>
                        <li>/<Link to="/companies">{engb_text.minimenuservizi.companies}</Link></li><hr/>
                        <li>/<Link to="/design">{engb_text.minimenuservizi.design}</Link></li><hr/>
                        <li>/<Link to="/support">{engb_text.minimenuservizi.support}</Link></li><hr/>
                        <li>/<Link to="/content-creation">{engb_text.minimenuservizi.content}</Link></li><hr/>
                        <li>/<Link to="/marketing">{engb_text.minimenuservizi.marketing}</Link></li><hr/>
                      </ul>
                    </div>
                  </li>
                }
                <li><a href="./#projects-link">{engb_text.navbar.portfolio}</a></li>
                <li><a href="./#contacts">{engb_text.navbar.contacts}</a></li>
              </ul>

            </div>
            <div className="hamburger flex" /* onClick={animazioneBurgherMenu} *//*onClick={burgherMenu}*/>
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