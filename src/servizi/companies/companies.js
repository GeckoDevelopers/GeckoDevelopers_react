import './companies.scss';
/* import { getEngb_text } from "../../lingue/inglese"; */

export default function Companies() {
  /* var engb_text = getEngb_text(); */
  return (
    <section class="container-services  companies_green">
      <div class="card-mover">
        <div class="card">
          <div class="flex main-title">
            <img src="./images/icon_companies.png" alt=""/>
            <h2>Website for Companies</h2>
          </div>
          <p class="description">
            If you’re developing a start-up, reaching for your dreams or opening a store, it is crucial to have a website that clearly showcases your identity and connects with your target audience and customers in an in-depth, as well as professional and clear way. Having your own website will help you increase credibility, exchange information, grant 24/7 accessibility, market expansion, advertising, while cutting down your costs.
          </p>
          <div class="sidetext flex">
            <img src="./images/img-services_companies.png" alt=""/>
            <div class="text">
              <hr/>
              <h2>PLANS & STRATEGIES</h2>
              <p>
                Your website needs to be user friendly and easy to navigate, while giving precise and detailed information about your business and industry as well as promote your brand.
              </p>
            </div>
          </div>
            <p class="ul">
                Through our expert developers, we offer website creation for different levels of interactivity that suits your company’s needs and values.
            </p>
            <p>For more information, <a id="get-touch" class=" companies_green" href="./#contacts">get in touch</a> with us!</p>
        </div>
          {/* @for($i = 0; $i < 500; $i++)
          <div class="ombra  companies_green"></div>
          @endfor */}
      </div>
    </section>
  )

}