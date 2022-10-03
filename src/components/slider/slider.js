import "./slider.scss";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Slider({ data }) {

   const [imageId, setImageId] = useState(0);
   var datas = data

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
   //#endregion

   return (
      <section id="imageViewer">
         <div className="container">

            <div className="slider">
               {image[0]}
               <div className="img-container" onClick={nextImg}>
                  {image[1]}
               </div>

               <div className="slider-comands">
                  <div className="arrow" onClick={prevImg}></div>
                  {dot}
                  <div className="arrow" onClick={nextImg}></div>
               </div>
            </div>

         </div>
      </section>
   )
}