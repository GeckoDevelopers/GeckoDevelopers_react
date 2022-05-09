import './mailForm.scss';
import { getEngb_text } from "../lingue/inglese";
import emailjs from 'emailjs-com';

export default function MailForm() {
  var engb_text = getEngb_text();
  /* const form = useRef(); */

  function sendMail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'Gmail-eheheh', e.current, 's2f0n7Fyg964jaMFu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }
    );
    e.target.reset()
  }
  
  return (
    <section id="contacts">
      <div className="container-custom">
        <div className="intestazione flex">
          <h2>{engb_text.contact.title}</h2>
          <hr />
          <img src="./img/similmenu-white.svg" alt="" />
        </div>

        <form /* ref={form} */ onSubmit={sendMail}>
          <div className="sinistra">
            <label htmlFor="fname">Name</label><br/>
            <input type="text" nome="nome"/><br/>
            <label htmlFor="email">E-mail</label><br/>
            <input type="email" nome="email"/><br/>
            <label htmlFor="subject" >Subject</label><br/>
            <input type="text" nome="oggetto"/><br/>
          </div>

          <div className="corpo-email">
            <label htmlFor="subject">Text</label>
            <textarea rows="12" cols="12" nome="message"></textarea>
          </div>

          <div className="sotto">
            <div className="privacy">
                <span>Informativa sulla privacy: l'email e il nome non verranno salvati, verranno utilizzati al solo scopo di comunicazioni azienda cliente</span><br/>
            </div>
            <input type="submit" value="Send"/>
          </div>
        </form>

        <p className="more-contacts">You can also find us here: <span>info@geckodevelopers.eu</span></p>
      </div>
    </section>

  );
};

