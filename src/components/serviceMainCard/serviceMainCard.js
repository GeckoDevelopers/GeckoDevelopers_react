import './serviceMainCard.scss'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ServiceCard from '../cards/serviceCard/serviceCard'
import SingleServiceCard from '../cards/singleServiceCard/singleServiceCard'

export default function ServiceMainCard({ data }) {
	const { t } = useTranslation()

	//traduzione della riga seguente: cicla cards_portfolio e seleziona le card da mostrare
	//in base all'id delle cards dell singolo servizio
	//ricordarsi di mettere un id univoco hai portfolio
	var portfolioCards = t(`cards_portfolio`, { returnObjects: true }).filter(card => data.cards.includes(card.id))




//VIEW DEI SERVIZI SINGOLI



	return (
		<section id="serviceMainCard" className={`container-services ${data.color}`}>
			<div className={`card-mover ${data.color}`}>
				<div className="card">
					<div className="flex main-title">
						<img draggable="false" src={`./img/${data.icon}`} alt="" />
						<h2>{data.title}</h2>
					</div>
					<p className="description">{data.description}</p>
					<div className="sidetext flex">
						<img draggable="false" src="./img/img-services_content.webp" alt="" />
						<div className="text">
							<hr />
							<h2>{data.subtitle}</h2>
							<p>{data.paragraph}</p>
						</div>
					</div>
					<p>{data.list.titlelist}</p>
					<ul>
						{data.list.bodylist.map((e, i) => {
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
						{data.contact.pre}
						<a id="get-touch" className={`${data.color}`} href="./#contacts">
							{data.contact.link}
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
