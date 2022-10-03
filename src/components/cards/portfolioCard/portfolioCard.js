import './portfolioCard.scss'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function PortfolioCard({ data }) {
	const { t } = useTranslation()

	const location = useLocation()

	function scrollUp() {
		window.scrollTo(0, 0)
	}
	// var classeee = location.pathname === "/" ? "grigiastro" : "verdastro" // funziona anche cosi
	return (
		<section id="portfolioCard" className={`${data.color}`}>
			<div className="carta_container">
				<a target="_blank" href={`${data.link}`} className="carta">
					<img draggable="false" src={`./img/portrait/${data.image1}`} alt="" />
					<img draggable="false" src={`./img/portrait/${data.image2}`} alt="" />
					<img draggable="false" src={`./img/portrait/${data.image3}`} alt="" />
					<div className="flex">
						<h3>{data.title}</h3>
						<p>{data.paragrafo}</p>
						<span>{t('card_view_more')}</span>
					</div>
				</a>
			</div>
		</section>
	)
}
