import './navbar.scss';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { HashLink } from 'react-router-hash-link';

export default function Navbar() {
  const { t } = useTranslation();

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

  function changeLanguages(event) {
    i18next.changeLanguage(event)
    //i18next.changeLanguage(event.target.value)
  }

  return (
    <nav>
      {/* <div className='nav_filler'></div> */}
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

            <div className="lingueSelector" /* onClick={animazioneTendina} */>
              {/* <span id="servicesMenu">lingue
                <i id="caret" className="fas fa-angle-down"></i>
              </span> */}
              <div className="flex">
                <button type="button" onClick={() => changeLanguages("en")}><img src="./img/flags/english.jpg" alt="" /></button>
                <button type="button" onClick={() => changeLanguages("it")}><img src="./img/flags/italiano.jpg" alt="" /></button>
              </div>
            </div>

            {/* <select onChange={changeLanguages} id="lingue">
              <option value="it">Italiano</option>
              <option value="en">English</option>
            </select> */}

            <div className="nav-dropdown">
              <ul>
                {location.pathname === "/" 
                  ? ""/*<a href="#home">{ita_text.navbar.home}</a>*/ 
                  : <li onClick={closeMenudaiLink}><Link onClick={scrollUp} to="/">{t('navbar.home')}</Link></li>
                }
                <li className="nowrap" onClick={animazioneTendina}>
                  <span id="servicesMenu">{t('navbar.services')}
                    <i id="caret" className="fas fa-angle-down"></i>
                  </span>
                  <div className="dropdown-services">
                    <ul>
                      <hr/>
                      <li onClick={closeMenudaiLink}>/<Link to="/servizi_mainpage">{t('minimenuservizi.all')}</Link></li><hr/>
                      <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/full">{t('minimenuservizi.full')}</Link></li><hr/>
                      <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/individuals">{t('minimenuservizi.indivisuals')}</Link></li><hr/>
                      <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/companies">{t('minimenuservizi.companies')}</Link></li><hr/>
                      <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/design">{t('minimenuservizi.design')}</Link></li><hr/>
                      <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/support">{t('minimenuservizi.support')}</Link></li><hr/>
                      <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/content_creation">{t('minimenuservizi.content')}</Link></li><hr/>
                      <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/marketing">{t('minimenuservizi.marketing')}</Link></li><hr/>
                    </ul>
                  </div>
                </li>
                <li onClick={closeMenudaiLink}><HashLink to="/#projects-link">{t('navbar.portfolio')}</HashLink></li>
                {/* <li onClick={closeMenudaiLink}><Link to="/#projects-link">{t('navbar.portfolio')}</Link></li> */}
                <li onClick={closeMenudaiLink}><HashLink to="/#contacts">{t('navbar.contacts')}</HashLink></li>
                <li onClick={closeMenudaiLink}><Link onClick={scrollUp} to="/about_us">{t('navbar.about_us')}</Link></li>
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