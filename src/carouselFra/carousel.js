import './carousel.scss';
import { getEngb_text } from "../lingue/inglese";
import { Link } from "react-router-dom";

export default function Carousel() {
  var engb_text = getEngb_text();


  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex = slideIndex + n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    //slides[slideIndex-1]//.style.display = "block";  
    //dots[slideIndex-1].className += " active";
    console.log(slideIndex);
    console.log(slides);
    console.log(dots);
    console.log(slides[1]);
    console.log(dots[1]);
  }



  return (
    <section>
      <div className="slideshow-container">

          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="./img/img_nature_wide.jpg" style={{width:"100%"}} />
            <div className="text">Caption Text</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="./img/img_snow_wide.jpg" style={{width:"100%"}} />
            <div className="text">Caption Two</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="./img/img_mountains_wide.jpg" style={{width:"100%"}} />
            <div className="text">Caption Three</div>
          </div>

          <a className="prev" onClick={plusSlides(-1)}>❮</a>
          <a className="next" onClick={plusSlides(1)}>❯</a>

        </div>
        <br />

        <div style={{/*text,*/align:"center"}}>
          <span className="dot" onClick={currentSlide(1)}></span> 
          <span className="dot" onClick={currentSlide(2)}></span> 
          <span className="dot" onClick={currentSlide(3)}></span> 
        </div>
     
    </section>
  );
};