import './serviceCard.scss';
/* import { getita_text } from "../lingue/inglese"; */
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function ServiceCard() {
	const { t } = useTranslation();

	/* var ita_text = getita_text(); */
	const location = useLocation();


    function scrollUp() {
        window.scrollTo(0, 0)
     }
	// var classeee = location.pathname === "/" ? "grigiastro" : "verdastro" // funziona anche cosi
	return (

        <section className="trasparente content_orange">
            <div className="carta_container">
                <Link onClick={scrollUp} className="carta" to="/content_creation">
                    <div className="flex">
                        <img src="./img/icon_content.png" alt="" />
                        <h3>{t('card_content_creation.title')}</h3>
                    </div>
                    <p>{t('card_content_creation.paragrafo')}</p>
                    <span>{t('card_view_more')}</span>
                </Link>
            </div>
        </section>


	);
};