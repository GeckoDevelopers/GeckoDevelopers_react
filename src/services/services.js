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
      <span className="link" id="services-link"></span>
      <div className="container-custom">

{/* <!-- prima ROW COL TESTO --> */}
        <div className="riga">

          <div className="col-md-8">
            <div className="intestazione flex">
              <h2>{engb_text.services.title}</h2>
              <hr />
              <img src="./img/similmenu-white.svg" alt="style" />
            </div>
       
            <p>
              {engb_text.services.paragrafo1}
              <br />
              <br />
              {engb_text.services.paragrafo2}
            </p>
          </div>

          <div className="trasparente full_gray">
            <div className="carta_container">
              <Link to="/full" component={Full} className="carta">
                <div className="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.card_full.title}</h3>
                </div>
                <p>{engb_text.card_full.paragrafo}</p>
                <span>{engb_text.card_view_more}</span>
              </Link>
            </div>
          </div>

        </div>

{/* <!-- seconda ROW --> */}
        <div className="riga">

          <div className="trasparente individuals_el_green">
            <div className="carta_container">
              <Link className="carta" to="/individuals" component={Individuals} >
                <div className="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.card_individuals.title}</h3>
                </div>
                <p>{engb_text.card_individuals.paragrafo}</p>
                <span>{engb_text.card_view_more}</span>
              </Link>
            </div>
          </div>

          <div className="trasparente companies_green">
            <div className="carta_container">
              <Link className="carta" to="/companies" component={Companies}>
                <div className="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.card_companies.title}</h3>
                </div>
                <p>{engb_text.card_companies.paragrafo}</p>
                <span>{engb_text.card_view_more}</span>
              </Link>
            </div>
          </div>

          <div className="trasparente design_dk_green">
            <div className="carta_container">
              <Link className="carta" to="/design" component={Design}>
                <div className="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.card_design.title}</h3>
                </div>
                <p>{engb_text.card_design.title}</p>
                <span>{engb_text.card_view_more}</span>
              </Link>
            </div>
          </div>

        </div>

{/* <!-- terza ROEW --> */}
        <div className="riga">

          <div className="trasparente continuous_yellow">
            <div className="carta_container">
              <Link className="carta" to="/support" component={Support}>
                <div className="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.card_support.title}</h3>
                </div>
                <p>{engb_text.card_support.paragrafo}</p>
                <span>{engb_text.card_view_more}</span>
              </Link>
            </div>
          </div>

          <div className="trasparente content_orange">
            <div className="carta_container">
              <Link className="carta" to="/content-creation" component={ContentCreation}>
                <div className="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.card_content_creation.title}</h3>
                </div>
                <p>{engb_text.card_content_creation.paragrafo}</p>
                <span>{engb_text.card_view_more}</span>
              </Link>
            </div>
          </div>

          <div className="trasparente marketing_red">
            <div className="carta_container">
              <Link className="carta" to="/marketing" component={Marketing}>
                <div className="flex">
                  <img src="" alt="" />
                  <h3>{engb_text.card_marketing.title}</h3>
                </div>
                <p>{engb_text.card_marketing.paragrafo}</p>
                <span>{engb_text.card_view_more}</span>
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};