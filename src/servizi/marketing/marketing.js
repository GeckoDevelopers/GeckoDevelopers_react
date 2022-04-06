import "./marketing.scss"
/* import { getEngb_text } from "../../lingue/inglese"; */

export default function Marketing() {
  /* var engb_text = getEngb_text(); */
  return(
    <section class="container-services  marketing_red">
      <div class="card-mover">
        <div class="card">
          <div class="flex main-title">
            <img src="./images/icon_marketing.png" alt=""/>
            <h2>Marketing Activities and Consultancy</h2>
          </div>
          <p class="description">
            Establishing accurate and correct marketing strategies is fundamental to generate lead, generate revenue, help grow your brand or business, in any form of industry or market. Marketing is what helps you connect with who you want to reach and, eventually, convert the reach into business.
          </p>
          <div class="sidetext flex">
            <img src="./images/img-services_marketing.png" alt=""/>
            <div class="text">
              <hr/>
                <h2>GUIDELINES & CONSISTENCY</h2>
                <p>
                  Together with marketing strategies, a brand identity and a brand image are also crucial aspects in any form of business or a company. A unique and, most importantly, well-thought and well-established brand identity can help you foster better relationships with your customers or your target audience, as it can better show that you share similar values, as well as help provide consistency to your brand, while serving as a form of guidelines for your future activities.
                </p>
              </div>
          </div>
          <p>Our services for Marketing Activities and Consultancy include:</p>
          <ul>
            <li><i class="fas fa-caret-right"></i>Digital, online marketing strategies</li>
            <li><i class="fas fa-caret-right"></i>Offline marketing strategies</li>
            <li><i class="fas fa-caret-right"></i>Marketing consultancy</li>
            <li><i class="fas fa-caret-right"></i>ROI (Return on Investment) measurements</li>
            <li><i class="fas fa-caret-right"></i>Marketing campaign activation and tracking</li>
            <li><i class="fas fa-caret-right"></i>Constructing SEA (Search Engine Advertising) campaigns</li>
            <li><i class="fas fa-caret-right"></i>Forming a brand identity</li>
          </ul>
          <p>For more information, <a id="get-touch" class=" marketing_red" href="./#contacts">get in touch</a> with us!</p>
        </div>
        {/* @for($i = 0; $i < 500; $i++)
        <div class="ombra  marketing_red"></div>
        @endfor */}
      </div>
    </section>

  )
}