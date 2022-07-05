import './portfolioCard.scss';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function PortfolioCard({data}) {
	const { t } = useTranslation();

	const location = useLocation();


    function scrollUp() {
        window.scrollTo(0, 0)
     }
	// var classeee = location.pathname === "/" ? "grigiastro" : "verdastro" // funziona anche cosi
	return (

        <section className={`trasparente ${data.color}`}>
            <div className="carta_container">
                <Link onClick={scrollUp} className="carta" to={`${data.link}`}>
                    <div className="flex">
                        <img src={`${data.icon}`} alt="" />
                        <h3>{data.title}</h3>
                    </div>
                    <p>{data.paragrafo}</p>
                    <span>{t('card_view_more')}</span>
                </Link>
            </div>
        </section>
        
	);
};