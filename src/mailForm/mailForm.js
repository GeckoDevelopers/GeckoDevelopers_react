import './mailForm.scss';
import { getEngb_text } from "../lingue/inglese";
import emailjs from 'emailjs-com';
import { useRef } from 'react';

export default function MailForm() {
  var engb_text = getEngb_text();
  const form = useRef();

  function sendMail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_zjmrdij', form.current, 's2f0n7Fyg964jaMFu')
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

        <form ref={form} onSubmit={sendMail}>
          <div className="sinistra">
            <label htmlFor="fname">Name</label><br/>
            <input type="text" name="nome"/><br/>
            <label htmlFor="email">E-mail</label><br/>
            <input type="email" name="email"/><br/>
            <label htmlFor="subject" >Subject</label><br/>
            <input type="text" name="oggetto"/><br/>
          </div>

          <div className="corpo-email">
            <label htmlFor="subject">Text</label>
            <textarea rows="12" cols="12" name="message"></textarea>
          </div>

          <div className="sotto">
            <div className="privacy">
                <span>Informativa sulla privacy: l'email e il nome non verranno salvati, verranno utilizzati al solo scopo di comunicazioni azienda cliente</span><br/>
            </div>
            <input type="submit" value="Send"/>
          </div>
        </form>

        <p className="more-contacts">You can also find us here: <span>gecko.devs@gmail.com</span></p>
      </div>

      <div className='overlay'>
        <div className='success'>
        </div>
        <div className='fail'>
        </div>
      </div>

    </section>

  );
};

