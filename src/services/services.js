import './services.scss';
import { getEngb_text } from "../lingue/inglese";


function About_us() {
  var engb_text = getEngb_text();
  return (
    <section id="services">
      <span class="link" id="services-link"></span>
      <div class="container-custom">

{/* <!-- ROW COL TESTO --> */}
        <div class="riga">
          <div class="col-md-8">
            <div class="intestazione flex">
              <h2>{engb_text.services.title}</h2>
              <hr />
              <img src="./images/similmenu-white.svg" alt="" />
            </div>
       
            <p>
              {engb_text.services.title}
              <br />
              <br />
              {engb_text.services.title}
            </p>
          </div>

          <div class="trasparente full_gray">
            <div class="carta_container">
              <a class="carta" href="{{route('services', ['service' => 'full'])}}">
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </a>
            </div>
          </div>

        </div>

{/* <!-- PRIMA ROW --> */}
        <div class="riga">

          <div class="trasparente individuals_el_green">
            <div class="carta_container">
              <a class="carta" href="{{route('services', ['service' => 'website-services'])}}">
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </a>
            </div>
          </div>

          <div class="trasparente companies_green">
            <div class="carta_container">
              <a class="carta" href="{{route('services', ['service' => 'website-company'])}}">
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </a>
            </div>
          </div>

          <div class="trasparente design_dk_green">
            <div class="carta_container">
              <a class="carta" href="{{route('services', ['service' => 'creative'])}}">
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </a>
            </div>
          </div>

        </div>

{/* <!-- SECONDA ROEW --> */}
        <div class="riga">

          <div class="trasparente continuous_yellow">
            <div class="carta_container">
              <a class="carta" href="{{route('services', ['service' => 'support'])}}">
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </a>
            </div>
          </div>

          <div class="trasparente content_orange">
            <div class="carta_container">
              <a class="carta" href="{{route('services', ['service' => 'content-creation'])}}">
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </a>
            </div>
          </div>

          <div class="trasparente marketing_red">
            <div class="carta_container">
              <a class="carta" href="{{route('services', ['service' => 'marketing'])}}">
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About_us;

{/* <h3>{engb_text.jumbo.subtitle}</h3> */}