import React from "react";
import './nomeparte.scss';

function nomeparte() {
  return (
    <section id="home" class="jumbo">
            
      <div class="jumbo flex">
        <div class="container-custom flex"><!-- css in _common.scss -->
            
          <div class="jumbo-title">
            <h1>{{__('home.jumbo.title')}}<br>{{__('home.jumbo.title2')}}</h1>
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
              <h3>{{__('home.jumbo.subtitle')}}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default nomeparte;