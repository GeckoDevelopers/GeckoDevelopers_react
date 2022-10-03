import './portfolio.scss';
import { PortfolioData } from './portfolioData';
import { useState } from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';


/* const slides = { PortfolioData } */

export default function Portfolio({ slides }) {
	const { t } = useTranslation();

	const [imageId, setImageId] = useState(0);
	var datas = PortfolioData

	// dots fra version
	var dots = [];
	for (let i = 0; i < datas.length; i++) {
		dots.push(<div className={(imageId === i) ? "active dot" : "dot"} onClick={() => setImageById(i)}></div>);
	}

	// display del carosello
	var image = [
		<p className="img_description">{datas[imageId]?.text}</p>,
		<img draggable="false" alt="immagine mancante" className="carosello" src={datas[imageId]?.image} />
	]

	//#region funzioni
	function setImageById(i) {
		setImageId(i);
	}

	// frecce minus
	function prevImg() {
		if (imageId === 0) {
			setImageId(datas.length - 1);
		} else {
			setImageId(imageId - 1);
		}
	}

	// funzioni per il cambio immagine nel carosello
	function nextImg() {
		if (imageId >= datas.length - 1) {
			setImageId(0);
		} else {
			setImageId(imageId + 1);
		}
	}

	// SCROLL UP DEI LINK
	function scrollUp() {
		window.scrollTo(0, 0)
	}
	//#endregion

	return (
		<section id="projects">
			<span className="link" id="projects-link"></span>
			<div className="container-custom">

				<div className="intestazione flex">
					<h2>{t('portfolio.title')}</h2>
					<hr />
					<img draggable="false" src="./img/similmenu-green.svg" alt="" />
				</div>

				<div className="slider">
					<div className='slider-text'>
						{image[0]}
					</div>
					<div className="slide" onClick={nextImg}>
						{image[1]}
					</div>
				</div>

				<div className="dots">
					<i className="fa-solid fa-angle-left" onClick={prevImg}></i>
					<div className='dot_container'>
						{dots}
					</div>
					<i className="fa-solid fa-angle-right" onClick={nextImg}></i>
				</div>

				<div className="discover flex">
					<hr />
					<Link className="discover" to="/discover_more" onClick={scrollUp} >Discover more...</Link>
				</div>

			</div>
		</section>
	);
};
