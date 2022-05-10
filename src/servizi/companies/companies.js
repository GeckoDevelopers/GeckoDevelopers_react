import './companies.scss';
/* import { getEngb_text } from "../../lingue/inglese"; */

export default function Companies() {
  /* var engb_text = getEngb_text(); */
  return (
    <section className="container-services ">
      <div className="card-mover companies_green">
        <div className="card">
          <div className="flex main-title">
            <img src="./img/img-pagine-servizi/icon_companies.png" alt="" />
            <h2>Website for Companies</h2>
          </div>
          <p className="description">
            If you’re developing a start-up, reaching for your dreams or opening a store, it is crucial to have a website that clearly showcases your identity and connects with your target audience and customers in an in-depth, as well as professional and clear way. Having your own website will help you increase credibility, exchange information, grant 24/7 accessibility, market expansion, advertising, while cutting down your costs.
          </p>
          <div className="sidetext flex">
            <img src="./img/img-pagine-servizi/img-services_companies.png" alt=""/>
            <div className="text">
              <hr/>
              <h2>PLANS & STRATEGIES</h2>
              <p>
                Your website needs to be user friendly and easy to navigate, while giving precise and detailed information about your business and industry as well as promote your brand.
              </p>
            </div>
          </div>
            <p className="ul">
                Through our expert developers, we offer website creation for different levels of interactivity that suits your company’s needs and values.
            </p>
            <p>For more information, <a id="get-touch" className=" companies_green" href="./#contacts">get in touch</a> with us!</p>
        </div>
          {/* @for($i = 0; $i < 500; $i++)
          <div className="ombra  companies_green"></div>
          @endfor */}
      </div>
    </section>
  )

}