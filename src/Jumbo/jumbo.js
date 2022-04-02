import './jumbo.scss';
import { getEngb_text } from "../lingue/inglese";


function Jumbo() {
  var engb_text = getEngb_text();
  return (
    <section id="home" class="jumbo">
            
      <div class="jumbo flex">
        <div class="container-custom flex">
            
          <div class="jumbo-title">
            <h1>{engb_text.jumbo.title1}<br/>{engb_text.jumbo.title2}</h1>
          </div>

          <div class="divider">
              <div class="red"></div>
              <div class="orange"></div>
              <div class="yellow"></div>
              <div class="white"></div>
              <div class="light-green"></div>
              <div class="green"></div>
              <div class="dark-green"></div>
              <div class="gray"></div>
          </div>

          <div class="jumbo-subtitle">
              <h3>{engb_text.jumbo.subtitle}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbo;