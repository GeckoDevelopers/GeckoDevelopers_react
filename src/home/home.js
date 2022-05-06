/* import { getEngb_text } from "../lingue/inglese"; */
import Jumbo from '../Jumbo/jumbo';
import AboutUs from '../about_us/about_us';
import Services from '../services/services';
import Porfolio from '../portfolio/portfolio'
import MailForm from '../mailForm/mailForm';

import { PortfolioData } from '../portfolio/portfolioData';




export default function Home() {
  /* var engb_text = getEngb_text(); */
  return (
    <main className="home">
      <Jumbo/>
      <AboutUs/>
      <Services/>
      <Porfolio slides={PortfolioData} />
      <MailForm/>
    </main>
  );
};