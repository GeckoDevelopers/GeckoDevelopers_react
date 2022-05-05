import './portfolio.scss';
import { getEngb_text } from "../lingue/inglese";

export default function Portfolio() {
  var engb_text = getEngb_text();
  return (
    <section id="projects">
      <span className="link" id="projects-link"></span>
      <div className="container-custom">

        <div className="intestazione flex">
          <h2>{engb_text.portfolio.title}</h2>
          <hr />
          <img src="./images/similmenu-green.svg" alt="" />
        </div>

        <div className="slider">
        </div>

        <div className="discover flex">
          <hr />
          <a>Discover more...</a>
        </div>
        
      </div>
    </section>
  );
};
