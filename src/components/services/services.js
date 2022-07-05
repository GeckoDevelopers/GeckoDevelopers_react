import './services.scss';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ServiceCard from '../cards/serviceCard/serviceCard';

export default function Services() {
   const { t } = useTranslation();
   
   var cardsService = t(`cards_service`, { returnObjects: true })
   var neddedCards = [ "card_full", "card_design", "card_content_creation", "card_marketing"]
   var cardsService = cardsService.filter(card => {
     return neddedCards.includes(card.id);
   })

   // SCROLL UP DEI LINK
   function scrollUp() {
      window.scrollTo(0, 0)
   }

   return (
      <section id="services">
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
            </div>
            {/* <!-- seconda ROW --> */}
            <div className="riga">
               {cardsService.map((card, i) => {
                    // Return the element. Also pass key     
                    return (<ServiceCard key={card.id} data={card} />) 
                })}
            </div>
         </div>
      </section>
   );
};