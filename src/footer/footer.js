import '../footer/footer.scss';
/* import { getEngb_text } from "../lingue/inglese";
import { Link } from "react-router-dom"; */

export default function Footer() {
  /* var engb_text = getEngb_text(); */
  
  return (
    /* @if (Route::current()->getName()=='services')
      <footer class="verdastro">
    @else
      <footer class="grigiastro">
    @endif */
    <footer class="verdastro">
      <div class="container-custom">
        <h2>Gecko <br/> Devs</h2>
        <p>Gecko Developers brand and logo are trademarks of Gecko Developers S.r.l. © 2021.</p>
      </div>

      <div class="divider">
        <div class="red"></div>
        <div class="orange"></div>
        <div class="yellow"></div>
        <div class="white"></div>
        <div class="light-green"></div>
        <div class="green"></div>
        <div class="dark-green"></div>
        <div class="gray"></div>
      </div>

        {/* <div class="social">
          <a href=""><i class="fab fa-linkedin"></i></a>
          <a href=""><i class="fab fa-instagram"></i></a>
        </div>  */}
    </footer>
  );
};