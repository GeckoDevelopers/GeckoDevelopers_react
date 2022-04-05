import './about_us.scss';
import { getEngb_text } from "../lingue/inglese";


function Jumbo() {
  var engb_text = getEngb_text();
  return (
    <section id="about_us">
      
      <span class="link" id="about_us-link"></span>
        
        <div class="container-custom">
          
          <div class="intestazione flex">
            
            <h2>{engb_text.about.title}</h2>
            <hr />
            <img src="./img/similmenu-green.svg" alt="" />
          
          </div>
          
          <p>{engb_text.about.subtitle}</p>
          
          <div class="cards">
              <img class="imgdesk" src="./img/img-about_us.png" alt=""/>
              <img class="imgmobile" src="./img/about_us-large.png" alt=""/>
          </div>
        
        </div>
    </section>
  
  );
};

export default Jumbo;