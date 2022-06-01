import './about_us.scss';
import { getIta_text } from "../lingue/italiano";


export default function Jumbo() {
  var ita_text = getIta_text();
  return (
    <section id="about_us">
      
      <span className="link" id="about_us-link"></span>
        
        <div className="container-custom">
          
          <div className="intestazione flex">
            
            <h2>{ita_text.about.title}</h2>
            <hr />
            <img src="./img/similmenu-green.svg" alt="" />
          
          </div>
          
          <p>{ita_text.about.subtitle}</p>
          
          <div className="cards">
              <img className="imgdesk" src="./img/img-about_us.webp" alt=""/>
              <img className="imgmobile" src="./img/about_us-large.webp" alt=""/>
          </div>
        
        </div>
    </section>
  
  );
};