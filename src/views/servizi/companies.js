import './servizi.scss';
/* import { getita_text } from "../lingue/inglese"; */

export default function Companies() {
   /* var ita_text = getita_text(); */
   return (
      <section className="container-services companies_green">
         <div className="card-mover companies_green">
            <div className="card">
               <div className="flex main-title">
                  <img src="./img/icon_companies.png" alt="" />
                  <h2>Website for Companies</h2>
               </div>
               <p className="description">
                  If you’re developing a start-up, reaching for your dreams or opening a store, it is crucial to have a website that clearly showcases your identity and connects with your target audience and customers in an in-depth, as well as professional and clear way. Having your own website will help you increase credibility, exchange information, grant 24/7 accessibility, market expansion, advertising, while cutting down your costs.
               </p>
               <div className="sidetext flex">
                  <img src="./img/img-services_companies.webp" alt="" />
                  <div className="text">
                     <hr />
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
         </div>
      </section>
   )

}