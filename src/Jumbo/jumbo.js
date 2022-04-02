import React from "react";
import './jumbo.scss';
import { getEngb_text } from "../lingue/inglese";


function Jumbo() {
  var testo_inglese = getEngb_text();
  return (
    <section id="home" class="jumbo">
            
      <div class="jumbo flex">
        <div class="container-custom flex">
            
          <div class="jumbo-title">
            <h1> <br/> </h1>
          </div>

          <div class="divider">
              <div class="red"></div>
              <div class="orange"></div>
              <div class="yellow"></div>
              <div class="white"></div>
              <div class="light-green"></div>
              <div class="green"></div>
              <div class="dark-green"></div>
              <div class="gray"></div>
          </div>

          <div class="jumbo-subtitle">
              <h3></h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jumbo;