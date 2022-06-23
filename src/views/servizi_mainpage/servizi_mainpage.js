import './servizi_mainpage.scss';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function ServiziMain() {
   const { t } = useTranslation();

   // SCROLL UP DEI LINK
   function scrollUp() {
      window.scrollTo(0, 0)
   }

   return (
      <section id="servizi_main">
         <span className="link" id="services-link"></span>
         <div className="container-custom">

            {/* <!-- prima ROW COL TESTO --> */}
            <div className="riga">

               <div className="col-md-8">
                  <div className="intestazione flex">
                     <h2>{t('services.title')}</h2>
                     <hr />
                     <img src="./img/similmenu-white.svg" alt="style" />
                  </div>

                  <p>
                     {t('services.paragrafo1')}
                     <br />
                     <br />
                     {t('services.paragrafo2')}
                  </p>
               </div>

               <div className="trasparente full_gray">
                  <div className="carta_container">
                     <Link onClick={scrollUp} to="/full" className="carta">
                        <div className="flex">
                           <img src="./img/icon_full.png" alt="" />
                           <h3>{t('card_full.title')}</h3>
                        </div>
                        <p>{t('card_full.paragrafo')}</p>
                        <span>{t('card_view_more')}</span>
                     </Link>
                  </div>
               </div>

            </div>

            {/* <!-- seconda ROW --> */}
            <div className="riga">

               <div className="trasparente individuals_el_green">
                  <div className="carta_container">
                     <Link onClick={scrollUp} className="carta" to="/individuals">
                        <div className="flex">
                           <img src="./img/icon_individuals.png" alt="" />
                           <h3>{t('card_individuals.title')}</h3>
                        </div>
                        <p>{t('card_individuals.paragrafo')}</p>
                        <span>{t('card_view_more')}</span>
                     </Link>
                  </div>
               </div>

               <div className="trasparente companies_green">
                  <div className="carta_container">
                     <Link className="carta" to="/companies">
                        <div className="flex">
                           <img src="./img/icon_companies.png" alt="" />
                           <h3>{t('card_companies.title')}</h3>
                        </div>
                        <p>{t('card_companies.paragrafo')}</p>
                        <span>{t('card_view_more')}</span>
                     </Link>
                  </div>
               </div>

               <div className="trasparente design_dk_green">
                  <div className="carta_container">
                     <Link onClick={scrollUp} className="carta" to="/design">
                        <div className="flex">
                           <img src="./img/icon_creative.png" alt="" />
                           <h3>{t('card_design.title')}</h3>
                        </div>
                        <p>{t('card_design.paragrafo')}</p>
                        <span>{t('card_view_more')}</span>
                     </Link>
                  </div>
               </div>

            </div>

            {/* <!-- terza ROEW --> */}
            <div className="riga">

               <div className="trasparente continuous_yellow">
                  <div className="carta_container">
                     <Link className="carta" to="/support">
                        <div className="flex">
                           <img src="./img/icon_support.png" alt="" />
                           <h3>{t('card_support.title')}</h3>
                        </div>
                        <p>{t('card_support.paragrafo')}</p>
                        <span>{t('card_view_more')}</span>
                     </Link>
                  </div>
               </div>

               <div className="trasparente content_orange">
                  <div className="carta_container">
                     <Link onClick={scrollUp} className="carta" to="/content_creation">
                        <div className="flex">
                           <img src="./img/icon_content.png" alt="" />
                           <h3>{t('card_content_creation.title')}</h3>
                        </div>
                        <p>{t('card_content_creation.paragrafo')}</p>
                        <span>{t('card_view_more')}</span>
                     </Link>
                  </div>
               </div>

               <div className="trasparente marketing_red">
                  <div className="carta_container">
                     <Link onClick={scrollUp} className="carta" to="/marketing">
                        <div className="flex">
                           <img src="./img/icon_marketing.png" alt="" />
                           <h3>{t('card_marketing.title')}</h3>
                        </div>
                        <p>{t('card_marketing.paragrafo')}</p>
                        <span>{t('card_view_more')}</span>
                     </Link>
                  </div>
               </div>

            </div>

         </div>
      </section>
   );
};