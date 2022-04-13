import './jumbo.scss';
import { getEngb_text } from "../lingue/inglese";


function Jumbo() {
  var engb_text = getEngb_text();
  return (
    <section id="home" className="jumbo">
            
      <div className="jumbo flex">
        <div className="container-custom flex">
            
          <div className="jumbo-title">
            <h1>{engb_text.jumbo.title1}<br/>{engb_text.jumbo.title2}</h1>
          </div>

          <div className="divider">
              <div className="red"></div>
              <div className="orange"></div>
              <div className="yellow"></div>
              <div className="white"></div>
              <div className="light-green"></div>
              <div className="green"></div>
              <div className="dark-green"></div>
              <div className="gray"></div>
          </div>

          <div className="jumbo-subtitle">
              <h3>{engb_text.jumbo.subtitle}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbo;