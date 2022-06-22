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
		dots.push(<div className={(imageId === i)?"active dot":"dot"} onClick={() => setImageById(i)}></div>);
	}

  // display del carosello
  var image = [
		<p className="img_description">{datas[imageId]?.text}</p>,
		<img alt="immagine mancante" className="carosello" src={datas[imageId]?.image} />
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
          <img src="./img/similmenu-green.svg" alt="" />
        </div>

        <div className="slider">
            <div>
            <div className='slider-text'>
                {image[0]}
            </div>
            <div className="slide active">
                <div onClick={nextImg}>
                    {image[1]}
                </div>
                <div className='arrows'>
                <div className='arrow left-arrow' onClick={prevImg}>
                    <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className='arrow right-arrow' onClick={nextImg}>
                    <i className="fa-solid fa-angle-right"></i>
                </div>
                </div>
            </div>
            </div>

        </div>
        <div className="dots">
            <div>
                {dots}
            </div>
        </div>

        <div className="discover flex">
          <hr />
          <Link className="discover" to="/discover_more" onClick={scrollUp} >Discover more...</Link>
        </div>
        
      </div>
    </section>
  );
};
