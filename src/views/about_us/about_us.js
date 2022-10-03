import './about_us.scss'
import { useTranslation } from 'react-i18next'
import AboutUsCard from '../../components/cards/aboutUsCard/aboutUsCard'

export default function AboutUs() {
	const { t } = useTranslation()
	var cards_abaut_us = t(`cards_abaut_us`, { returnObjects: true })

	return (
		<section id="about_us">
			<span className="link" id="about_us-link"></span>

			<div className="container-custom">
				<div className="intestazione flex">
					<h2>{t('about.title')}</h2>
					<hr />
					<img draggable="false" src="./img/similmenu-green.svg" alt="" />
				</div>

				<p>{t('about.subtitle')}</p>

				<div className="cards">
					<img draggable="false" className="imgdesk" src="./img/img-about_us.webp" alt="" />
					<img draggable="false" className="imgmobile" src="./img/about_us-large.webp" alt="" />
				</div>
			</div>

			<div className="container-custom">
				<div className="riga">
					{cards_abaut_us.map((card, i) => {
						// Return the element. Also pass key
						return <AboutUsCard key={card.id} data={card} />
					})}
				</div>
			</div>
		</section>
	)
}
