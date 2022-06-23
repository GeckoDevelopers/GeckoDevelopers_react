/* import { getita_text } from "../lingue/inglese"; */
import Jumbo from '../../components/Jumbo/jumbo';
import Services from '../../components/services/services';
import Porfolio from '../../components/portfolio/portfolio'
import MailForm from '../../components/mailForm/mailForm';

import { PortfolioData } from '../../components/portfolio/portfolioData';

export default function Home() {
   /* var ita_text = getita_text(); */
   return (
      <main className="home">
         <Jumbo />
         <Services />
         <Porfolio slides={PortfolioData} />
         <MailForm />
      </main>
   );
};