import './mailForm.scss'
import emailjs from 'emailjs-com'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import React, { useState } from 'react'

export default function MailForm() {
	const { t } = useTranslation()

	const form = useRef() // per emailjs
	const [emailSended, setEmailSended] = useState(false)

	function sendMail(e) {
		setEmailSended(true)

		e.preventDefault()
		emailjs
			.sendForm('gmail', 'template_zjmrdij', form.current, 's2f0n7Fyg964jaMFu')
			.then
			// result => {
			// 	console.log(result.text)
			// 	document.getElementsByClassName('mailForm_overlay')[0].innerHTML = '<p><i className="fas fa-check"></i> Mail Sent</p>'
			// 	document.getElementsByClassName('mailForm_overlay')[0].classList.add('active')
			// 	setTimeout(chiudiSuccess, 3000)
			// 	function chiudiSuccess() {
			// 		document.getElementsByClassName('mailForm_overlay')[0].classList.remove('active')
			// 	}
			// },
			// error => {
			// 	console.log(error.text)
			// 	document.getElementsByClassName('mailForm_overlay')[0].innerHTML =
			// 		'<p><i className="far fa-times">Something goed wrong try to check the email</i></p>'
			// }
			()
		e.target.reset()
	}

	return (
		<section id="contacts">
			{/* <div className="mailForm_overlay"></div> */}
			<div className="container-custom">
				<div className="intestazione flex">
					<h2>{t('contact.title')}</h2>
					<hr />
					<img src="./img/similmenu-white.svg" alt="" />
				</div>

				<form ref={form} onSubmit={sendMail}>
					<div className="sinistra">
						<div className="input_label">
							<label htmlFor="fname">{t('contact.inputs.name')}</label>
							<input type="text" name="nome" />
						</div>
						<div className="input_label">
							<label htmlFor="email">{t('contact.inputs.email')}</label>
							<input type="email" name="email" placeholder={t('contact.placeholderemail')} />
						</div>
						<div className="input_label">
							<label htmlFor="subject">{t('contact.inputs.subject')}</label>
							<input type="text" name="oggetto" />
						</div>
					</div>

					<div className="corpo-email">
						<label htmlFor="subject">{t('contact.inputs.message')}</label>
						<textarea rows="12" cols="12" name="message" placeholder={t('contact.placeholdermsg')}></textarea>
					</div>

					<div className="sotto">
						<div className="privacy">
							<span>{t('contact.privacy')}</span>
							<br />
						</div>
						<input type="submit" value={t('contact.send')} />
					</div>
				</form>
				<h2 className="email-sended">{emailSended ? `${t('contact.emailsended')}` : ''}</h2>
				<p className="more-contacts">
					{t('contact.findushere')}
					<span>info@geckodevelopers.com</span>
				</p>
			</div>

			{/* <div className='overlay'>
        <div className='success'>
        </div>
        <div className='fail'>
        </div>
      </div> */}
		</section>
	)
}
