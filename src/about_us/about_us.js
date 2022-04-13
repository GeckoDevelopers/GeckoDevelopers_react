import './about_us.scss';
import { getEngb_text } from "../lingue/inglese";


function Jumbo() {
  var engb_text = getEngb_text();
  return (
    <section id="about_us">
      
      <span className="link" id="about_us-link"></span>
        
        <div className="container-custom">
          
          <div className="intestazione flex">
            
            <h2>{engb_text.about.title}</h2>
            <hr />
            <img src="./img/similmenu-green.svg" alt="" />
          
          </div>
          
          <p>{engb_text.about.subtitle}</p>
          
          <div className="cards">
              <img className="imgdesk" src="./img/img-about_us.png" alt=""/>
              <img className="imgmobile" src="./img/about_us-large.png" alt=""/>
          </div>
        
        </div>
    </section>
  
  );
};

export default Jumbo;