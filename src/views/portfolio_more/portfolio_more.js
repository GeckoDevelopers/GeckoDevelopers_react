import './portfolio_more.scss'
import PortfolioCard from '../../components/cards/portfolioCard/portfolioCard'
import { useTranslation } from 'react-i18next'

export default function Portfoliomore() {
	const { t } = useTranslation()
	var cards_portfolio = t(`cards_portfolio`, { returnObjects: true })

	return (
		<section id="portfoliomore">
			<span className="link" id="about_us-link"></span>

			<div className="container-custom">
				<div className="intestazione flex">
					<h2>{t('portfolio.title')}</h2>
					<hr />
					<img draggable="false" src="./img/similmenu-green.svg" alt="" />
				</div>

				<p>{t('portfolio.subtitle')}</p>

				<div className="riga">
					{cards_portfolio.map((card, i) => {
						// Return the element. Also pass key
						return <PortfolioCard key={card.id} data={card} />
					})}
				</div>
			</div>
		</section>
	)
}
