import './serviceMainCard.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ServiceCard from '../cards/serviceCard/serviceCard'
import SingleServiceCard from '../cards/singleServiceCard/singleServiceCard'

export default function ServiceMainCard({ data }) {
	const { t } = useTranslation()

	var url = window.location.href.split('/').pop()

	//traduzione della riga seguente: cicla cards_portfolio e seleziona le card da mostrare
	//in base all'id delle cards dell singolo servizio
    //ricordarsi di mettere un id univoco hai portfolio
	var portfolioCards = t(`cards_portfolio`, { returnObjects: true })
        .filter(card => t(`${url}.cards`, { returnObjects: true }).includes(card.id))

	return (
		<section id="serviceMainCard" className={`container-services ${t(`${url}.color`)}`}>
			<div className={`card-mover ${t(`${url}.color`)}`}>
				<div className="card">
					<div className="flex main-title">
						<img draggable="false" src={`./img/${t(`${url}.icon`)}`} alt="" />
						<h2>{t(`${url}.title`)}</h2>
					</div>
					<p className="description">{t(`${url}.description`)}</p>
					<div className="sidetext flex">
						<img draggable="false" src="./img/img-services_content.webp" alt="" />
						<div className="text">
							<hr />
							<h2>{t(`${url}.subtitle`)}</h2>
							<p>{t(`${url}.paragraph`)}</p>
						</div>
					</div>
					<p>{t(`${url}.list.titlelist`, { returnObjects: true })}</p>
					<ul>
						{t(`${url}.list.bodylist`, { returnObjects: true }).map((e, i) => {
							// Return the element. Also pass key
							return (
								<li key={i}>
									<i className="fas fa-caret-right"></i>
									{e}
								</li>
							)
						})}
					</ul>
					<p>
						{t(`${url}.contact.pre`)}
						<a id="get-touch" className={`${t(`${url}.color`)}`} href="./#contacts">
							{t(`${url}.contact.link`)}
						</a>
					</p>
				</div>
			</div>

			<div className="cards">
				{portfolioCards.length !== 0
					? portfolioCards.map((card, i) => {
							// Return the element. Also pass key
							return <SingleServiceCard key={i} data={card} />
					  })
					: ''}
			</div>
		</section>
	)
}
