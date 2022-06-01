import './navbar.scss';
import { getIta_text } from "../lingue/italiano";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  var ita_text = getIta_text();

  // SERVE PER I DISCORSI DI PATH DEI LINK
  const location = useLocation();

  // BURGHER MENU
  function animazioneBurgherMenu() {
    // BURGHER MENU ANIMAZIONE X
    var xMenu = document.querySelectorAll(".line1, .line2, .line3")
    for (let i = 0; i < xMenu.length; i++) {
      xMenu[i].classList.toggle("active")
    }
    // APERTURA MENU BURGHER
    var openBurgher = document.querySelectorAll('.nav-dropdown')
    openBurgher[0].classList.toggle("active")
  }

  // CARRET DOWN E MENU SERVIZI
  function animazioneTendina() {
    // CARRET DOWN CHE GIRA
    document.getElementById("caret").classList.toggle("rotate");
    // MENU A TENDINA CHE SCENDE O ENTRA DI LATO CON IL DISPLAY DEL TELEFONO
    document.getElementsByClassName("dropdown-services")[0].classList.toggle("servicesMenu")
  }
  function closeMenu() {
    // CHIUSURA DEL MENU A TENDINA CON LA X DEL BURGHERMENU
    document.getElementsByClassName("dropdown-services")[0].classList.remove("servicesMenu")
  }
  
  // CHIUSURA DEI MENU AL CLICK SUI LINK
  function closeMenudaiLink() {
    /// CHIUSURA BURGHER MENU
    var xMenu = document.querySelectorAll(".line1, .line2, .line3")
    for (let i = 0; i < xMenu.length; i++) {
      xMenu[i].classList.remove("active")
    }
    // CHIUSURA MENU DEL BURGHER MENU
    document.querySelectorAll('.nav-dropdown')[0].classList.remove("active")
  }

  // SCROLL UP DEI LINK
  function scrollUp() {
    window.scrollTo(0, 0)
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
              {/* <select name="languages">
                <option value="ita">Italiano</option>
                <option value="engb">English</option>
              </select> */}
            <div className="nav-dropdown">
              <ul>
                <li onClick={closeMenudaiLink}><a href="./#about_us-link">{ita_text.navbar.about_us}</a></li>
                {location.pathname === "/" 
                  ? ""/*<a href="#home">{ita_text.navbar.home}</a>*/ 
                  : <li onClick={closeMenudaiLink}><Link onClick={scrollUp} to="/">{ita_text.navbar.home}</Link></li>}
                <li onClick={closeMenudaiLink}><a href="./#about_us-link">{ita_text.navbar.about_us}</a></li>
                {location.pathname === "/" 
                  ? <li onClick={closeMenudaiLink}><a href="#services-link">{ita_text.navbar.services}</a></li>
                  : 
                  <li className="nowrap" onClick={animazioneTendina}>
                    <span id="servicesMenu">{ita_text.navbar.services}
                      <i id="caret" className="fas fa-angle-down"></i>
                    </span>
                    <div className="dropdown-services">
                      <ul>
                        <hr/>
                        <li onClick={closeMenudaiLink}>/<a href="/#services-link">{ita_text.minimenuservizi.all}</a></li><hr/>
                        <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/full">{ita_text.minimenuservizi.full}</Link></li><hr/>
                        <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/individuals">{ita_text.minimenuservizi.indivisuals}</Link></li><hr/>
                        <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/companies">{ita_text.minimenuservizi.companies}</Link></li><hr/>
                        <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/design">{ita_text.minimenuservizi.design}</Link></li><hr/>
                        <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/support">{ita_text.minimenuservizi.support}</Link></li><hr/>
                        <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/content-creation">{ita_text.minimenuservizi.content}</Link></li><hr/>
                        <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/marketing">{ita_text.minimenuservizi.marketing}</Link></li><hr/>
                      </ul>
                    </div>
                  </li>
                }
                <li onClick={closeMenudaiLink}><a href="./#projects-link">{ita_text.navbar.portfolio}</a></li>
                <li onClick={closeMenudaiLink}><a href="./#contacts">{ita_text.navbar.contacts}</a></li>
              </ul>

            </div>
            <div className="hamburger flex" onClick={() => {animazioneBurgherMenu();closeMenu();}}>
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