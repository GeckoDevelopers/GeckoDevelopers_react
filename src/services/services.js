import './services.scss';
import { getEngb_text } from "../lingue/inglese";
import { Link } from "react-router-dom";
import Full from "../servizi/full_services/full"
import Individuals from '../servizi/individuals/individuals';
import Companies from '../servizi/companies/companies';
import Design from '../servizi/design/design';
import Support from '../servizi/support/support';
import ContentCreation from '../servizi/content_creation/content_creation';
import Marketing from '../servizi/marketing/marketing';

export default function About_us() {
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
              <Link to="/full" component={Full} class="carta">
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </Link>
            </div>
          </div>

        </div>

{/* <!-- PRIMA ROW --> */}
        <div class="riga">

          <div class="trasparente individuals_el_green">
            <div class="carta_container">
              <Link class="carta" to="/individuals" component={Individuals} >
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </Link>
            </div>
          </div>

          <div class="trasparente companies_green">
            <div class="carta_container">
              <Link class="carta" to="/companies" component={Companies}>
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </Link>
            </div>
          </div>

          <div class="trasparente design_dk_green">
            <div class="carta_container">
              <Link class="carta" to="/design" component={Design}>
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </Link>
            </div>
          </div>

        </div>

{/* <!-- SECONDA ROEW --> */}
        <div class="riga">

          <div class="trasparente continuous_yellow">
            <div class="carta_container">
              <Link class="carta" to="/support" component={Support}>
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </Link>
            </div>
          </div>

          <div class="trasparente content_orange">
            <div class="carta_container">
              <Link class="carta" to="/content-creation" component={ContentCreation}>
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </Link>
            </div>
          </div>

          <div class="trasparente marketing_red">
            <div class="carta_container">
              <Link class="carta" to="/marketing" component={Marketing}>
                <div class="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.services.title}</h3>
                </div>
                <p>{engb_text.services.title}</p>
                <span>View more...</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};