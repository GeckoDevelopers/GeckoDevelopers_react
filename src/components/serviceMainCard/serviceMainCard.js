import './serviceMainCard.scss';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import ServiceCard from '../cards/serviceCard/serviceCard';

export default function ServiceMainCard({ data }) {
   const { t } = useTranslation();
   
   var url = window.location.href.split("/").pop()

   return (
      <section id="serviceMainCard" className="container-services content_orange">
         <div className="card-mover content_orange">
            <div className="card">
               <div className="flex main-title">
                  <img src="./img/icon_content.png" alt="" />
                  <h2>{t(`${url}.title`)}</h2>
               </div>
               <p className="description">
               {t(`${url}.paragrafo1`)}
               </p>
               <div className="sidetext flex">
                  <img src="./img/img-services_content.webp" alt="" />
                  <div className="text">
                     <hr />
                     <h2>PLANS & STRATEGIES</h2>
                     <p>
                     {t(`${url}.paragrafo2`)}
                     </p>
                  </div>
               </div>
               <p>Our services for Content Creation include:</p>
               <ul>
                  <li><i className="fas fa-caret-right"></i>Creating content for your website</li>
                  <li><i className="fas fa-caret-right"></i>Developing content for your social media accounts</li>
                  <li><i className="fas fa-caret-right"></i>Content creation consultancy and improvements</li>
               </ul>
               <p>For more information, <a id="get-touch" className=" content_orange" href="./#contacts">get in touch</a> with us!</p>
            </div>
         </div>
      </section>
   );
};