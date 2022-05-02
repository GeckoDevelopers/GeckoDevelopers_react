import './carousel.scss';
import { getEngb_text } from "../lingue/inglese";
import { Link } from "react-router-dom";

export default function Carousel() {
  var engb_text = getEngb_text();

  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
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
    // slides[slideIndex-1].style.display = "block";  
    // dots[slideIndex-1].className += " active";
  }


  var arrayImg = [
    <img src="img_nature_wide.jpg" alt=''/>,
    <img src="img_snow_wide.jpg" alt=''/>,
    <img src="img_mountains_wide.jpg" alt=''/>
  ]
  console.log(arrayImg);

  for (let i = 0; i < arrayImg.length; i++) {
    var ciclo 
    
  }

  return (
    <section>

      <div id='ciclo'></div>

{/* <!-- Portfolio --> */}
      <div id="projects">
        <div className="container">
          <div className="carousel">
              <h2>Projects</h2>
              <div className="mySlides fade">
                  <div className="numbertext">1 / 4</div>
                  <a href="https://www.click2eat.it/" target="_blank">
                      {/* <div id="click2eat"></div> */}
                      <img src="./img/img_nature_wide.jpg" alt=''/>
                  </a>
                  <div className="text">Un sito fatto ad esempio</div>
              </div>
              <div className="mySlides fade">
                  <div className="numbertext">2 / 4</div>
                  <a href="https://www.google.it/?gfe_rd=ctrl&ei=OJLpUt_mBtDW8gfAnICwAw&gws_rd=cr" target="_blank">
                      {/* <div id="sample2"></div> */}
                      <img src="./img/img_nature_wide.jpg" alt=''/>
                  </a>
                  <div className="text">Caption Two</div>
              </div>

              <div className="mySlides fade">
                  <div className="numbertext">3 / 4</div>
                  <a href="https://www.google.it/?gfe_rd=ctrl&ei=OJLpUt_mBtDW8gfAnICwAw&gws_rd=cr" target="_blank">
                      {/* <div id="sample3"></div> */}
                      <img src="./img/img_nature_wide.jpg" alt=''/>
                  </a>
                  <div className="text">Caption Three</div>
              </div>

              <div className="mySlides fade">
                  <div className="numbertext">4 / 4</div>
                  <a href="https://www.google.it/?gfe_rd=ctrl&ei=OJLpUt_mBtDW8gfAnICwAw&gws_rd=cr" target="_blank">
                    <img src="./img/img_nature_wide.jpg" alt=''/>
                  </a>
                  <div className="text">Caption Four</div>
              </div>

              <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
              <a className="next" onClick="plusSlides(1)">&#10095;</a>
          </div>
          <div className="dot-style">
              <span className="dot" onClick="currentSlide(1)"></span>
              <span className="dot" onClick="currentSlide(2)"></span>
              <span className="dot" onClick="currentSlide(3)"></span>
              <span className="dot" onClick="currentSlide(4)"></span>
          </div>
        </div>
      </div>







    
      <div className="slideshow-container">

        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img src="./img/img_nature_wide.jpg" alt=''/>
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img src="./img/img_snow_wide.jpg" alt=''/>
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img src="./img/img_mountains_wide.jpg" alt=''/>
          <div className="text">Caption Three</div>
        </div>

        <a className="prev" onClick={plusSlides(-1)}>❮</a>
        <a className="next" onClick={plusSlides(1)}>❯</a>

      </div>
      <br />

      <div className='dot'>
        <span className="dot" onClick={currentSlide(1)}></span> 
        <span className="dot" onClick={currentSlide(2)}></span> 
        <span className="dot" onClick={currentSlide(3)}></span> 
      </div>
    </section>
  );
};