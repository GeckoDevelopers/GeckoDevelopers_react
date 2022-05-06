import './mailForm.scss';
import { getEngb_text } from "../lingue/inglese";
import { Link } from "react-router-dom";

export default function MailForm() {
  var engb_text = getEngb_text();
  
  return (
    <section id="contacts">
      <div className="container-custom">
        <div className="intestazione flex">
          <h2>{engb_text.contact.title}</h2>
          <hr />
          <img src="./img/similmenu-white.svg" alt="" />
        </div>

        <div className='mailForm'>



        </div>


        <p className="more-contacts">You can also find us here: <span>info@geckodevelopers.eu</span></p>
      </div>
    </section>

  );
};