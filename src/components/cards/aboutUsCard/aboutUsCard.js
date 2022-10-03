import './aboutUsCard.scss'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function AboutUsCard({ data }) {
	const { t } = useTranslation()

	const location = useLocation()

	// var classeee = location.pathname === "/" ? "grigiastro" : "verdastro" // funziona anche cosi
	return (
		<section id="aboutUsCard" className={`${data.color}`}>
			<div className="carta_container">
				<div className="carta">
					<img draggable="false" src={`./img/portrait/${data.image}`} alt="" />
					<div className="flex">
						<h3>{data.title}</h3>
						<p>{data.paragrafo}</p>
					</div>
				</div>
			</div>
		</section>
	)
}
