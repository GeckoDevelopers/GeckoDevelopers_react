import './about_us.scss';
import React, { useState } from "react";
import { getIta_text} from "../../lingue/italiano";
import { getEngb_text } from "../../lingue/inglese";
import {getLanguage, setLanguage} from  "../../variabili";


export default function About_us() {
    const ita = getIta_text();
    const eng = getEngb_text();
    
    const [contatore, setContatore] = useState("ita");

    console.log(getLanguage(), contatore);
    // console.log(setContatore(getLanguage()));
    if (getLanguage() !== contatore) {
        setContatore(getLanguage());
    }

    // setContatore(getLanguage())
  return (
    <section id="about_us">
      
        <span className="link" id="about_us-link"></span>
        
        <div className="container-custom">
          
          <div className="intestazione flex">
            
            <h2>{(contatore == "ita")?ita.about.title: eng.about.title}</h2>
            <hr />
            <img src="./img/similmenu-green.svg" alt="" />
          
          </div>
          
          <p>{(contatore == "ita")?ita.about.subtitle: eng.about.subtitle}</p>
          
          <div className="cards">
              <img className="imgdesk" src="./img/img-about_us.webp" alt=""/>
              <img className="imgmobile" src="./img/about_us-large.webp" alt=""/>
          </div>
        
        </div>
    </section>
  
  );
};