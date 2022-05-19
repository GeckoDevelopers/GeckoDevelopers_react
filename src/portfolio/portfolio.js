import './portfolio.scss';
import { getEngb_text } from "../lingue/inglese";
import { PortfolioData } from './portfolioData';
import { useState } from 'react';

/* const slides = { PortfolioData } */

export default function Portfolio({ slides }) {
  var engb_text = getEngb_text();

  
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

  return (
    <section id="projects">
      <span className="link" id="projects-link"></span>
      <div className="container-custom">

        <div className="intestazione flex">
          <h2>{engb_text.portfolio.title}</h2>
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
                      <i class="fa-solid fa-angle-left"></i>
                    </div>
                    <div className='arrow right-arrow' onClick={nextSlide}>
                      <i class="fa-solid fa-angle-right"></i>
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
          <a href=''>Discover more...</a>
        </div>
        
      </div>
    </section>
  );
};
