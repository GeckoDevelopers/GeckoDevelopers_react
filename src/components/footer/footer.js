import './footer.scss';
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Footer() {
	const { t } = useTranslation();

	const location = useLocation();

	// var classeee = location.pathname === "/" ? "grigiastro" : "verdastro" // funziona anche cosi
	return (
		<footer className={location.pathname === "/" ? "grigiastro" : "verdastro"}>
			<div className="container-custom">
				<h2>Gecko <br /> Devs</h2>
				<div className="social">
					{/* <a href=""><i className="fab fa-linkedin fa-2x"></i></a> */}
					{/* <a href=""><i className="fab fa-instagram"></i></a> */}
				</div>
				<p>Gecko Developers brand and logo are trademarks of Gecko Developers S.r.l. © 2022.</p>
			</div>


			<div className="divider">
				<div className="red"></div>
				<div className="orange"></div>
				<div className="yellow"></div>
				<div className="white"></div>
				<div className="light-green"></div>
				<div className="green"></div>
				<div className="dark-green"></div>
				<div className="gray"></div>
			</div>

		</footer>
	);
};