import { getEngb_text } from "../lingue/inglese";
import Jumbo from '../Jumbo/jumbo';
import AboutUs from '../about_us/about_us';
import Services from '../services/services';

export default function Navbar() {
  var engb_text = getEngb_text();
  return (
    <div className="home">
      <Jumbo/>
      <AboutUs/>
      <Services/>
    </div>
  );
};