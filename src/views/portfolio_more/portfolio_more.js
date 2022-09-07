import './portfolio_more.scss';
import PortfolioCard from '../../components/cards/portfolioCard/portfolioCard';
import { useTranslation } from 'react-i18next';

export default function Portfoliomore() {

   const { t } = useTranslation();
   var cards_portfolio = t(`cards_portfolio`, { returnObjects: true })
   console.log(cards_portfolio);

   return (
      <section id="portfoliomore">
         <div className="container-custom">
            <div className="riga">
               {cards_portfolio.map((card, i) => {
                  // Return the element. Also pass key     
                  return (<PortfolioCard key={card.id} data={card} />)
               })}
            </div>
         </div>
      </section>
   );
};