import './servizi_mainpage.scss';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ServiceCard from '../../components/cards/serviceCard/serviceCard';

export default function ServiziMain() {
   const { t } = useTranslation();

   var cards_service = t(`cards_service`, { returnObjects: true })

   // SCROLL UP DEI LINK
   function scrollUp() {
      window.scrollTo(0, 0)
   }

   return (
      <section id="servizi_main">
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
                     {t('servizi_mainpage.paragrafo1')}
                     <br />
                     <br />
                     {t('servizi_mainpage.paragrafo2')}
                  </p>
               </div>
                {cards_service.map((card, i) => {
                    // Return the element. Also pass key     
                    return (<ServiceCard key={card.id} data={card} />) 
                })}
            </div>
         </div> 
      </section>
   );
};