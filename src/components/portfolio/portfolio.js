import './portfolio.scss';
import { getIta_text } from "../../lingue/italiano";
import { PortfolioData } from './portfolioData';
import { useState } from 'react';
import { Link } from "react-router-dom";

/* const slides = { PortfolioData } */

export default function Portfolio({ slides }) {
  var ita_text = getIta_text();

  
  /* costruito seguendo https://www.youtube.com/watch?v=l1MYfu5YWHc */

  const [current, setCurrent] = useState(0)
  const length = slides.length
  
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  function nextSlide () {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  function prevSlide() {
    setCurrent(current === 0 ? length -1 : current -1)
  }

  // SCROLL UP DEI LINK
  function scrollUp() {
    window.scrollTo(0, 0)
  }
  
  return (
    <section id="projects">
      <span className="link" id="projects-link"></span>
      <div className="container-custom">

        <div className="intestazione flex">
          <h2>{ita_text.portfolio.title}</h2>
          <hr />
          <img src="./img/similmenu-green.svg" alt="" />
        </div>

        <div className="slider">
          {PortfolioData.map(function (slide, index) {
            return (
              <div>
                <div className='slider-text'>
                  {index === current && (<p>{slide.text}</p>)}
                </div>
                <div className={index === current ? "slide active" : "slide"} key={index}>
                  {index === current && (<img src={slide.image} alt={slide.alt}/>)}
                  <div className='arrows'>
                    <div className='arrow left-arrow' onClick={prevSlide}>
                      <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className='arrow right-arrow' onClick={nextSlide}>
                      <i className="fa-solid fa-angle-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
        <div className="dots">
          {PortfolioData.map(function (slide, index) {
            return (
              <div>
                <div className={index === current ? "pallini color" : "pallini"} key={index}/>
              </div>
            )
          })}
        </div>




        <div className="discover flex">
          <hr />
          <Link className="discover" to="/discover_more" onClick={scrollUp} >Discover more...</Link>
        </div>
        
      </div>
    </section>
  );
};
