import './about_us.scss';
import React, { useState } from "react";
import { getIta_text} from "../../lingue/italiano";
import { getEngb_text } from "../../lingue/inglese";
import { t } from 'i18next';


export default function About_us() {

  return (
    <section id="about_us">
      
        <span className="link" id="about_us-link"></span>
        
        <div className="container-custom">
          
          <div className="intestazione flex">
            
            <h2>{t('about.title')}</h2>
            <hr />
            <img src="./img/similmenu-green.svg" alt="" />
          
          </div>
          
          <p>{t('about.subtitle')}</p>
          
          <div className="cards">
              <img className="imgdesk" src="./img/img-about_us.webp" alt=""/>
              <img className="imgmobile" src="./img/about_us-large.webp" alt=""/>
          </div>
        
        </div>
    </section>
  
  );
};