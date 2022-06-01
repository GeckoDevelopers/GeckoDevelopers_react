import './jumbo.scss';
import { getIta_text } from "../lingue/italiano";


function Jumbo() {
  var ita_text = getIta_text();
  return (
    <section id="home" className="jumbo">
            
      <div className="jumbo flex">
        <div className="container-custom flex">
            
          <div className="jumbo-title">
            <h1>{ita_text.jumbo.title1}<br/>{ita_text.jumbo.title2}</h1>
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
              <h3>{ita_text.jumbo.subtitle}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbo;