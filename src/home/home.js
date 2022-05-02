/* import { getEngb_text } from "../lingue/inglese"; */
import Jumbo from '../Jumbo/jumbo';
import AboutUs from '../about_us/about_us';
import Services from '../services/services';
import Carousel from '../carousel/carousel';
import CarouselDiFra from "../carouselFra/carousel";

export default function Home() {
  /* var engb_text = getEngb_text(); */
  return (
    <div className="home">
      <Jumbo/>
      <AboutUs/>
      <Services/>
      <Carousel/>
      <CarouselDiFra/>
    </div>
  );
};