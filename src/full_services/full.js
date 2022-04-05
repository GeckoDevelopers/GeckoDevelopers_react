import './full.scss';
import { getEngb_text } from "../lingue/inglese";


export default function FullServices () {
  var engb_text = getEngb_text();
  return (
    <section class="container-services full_gray">
      <div class="card-mover">
        <div class="card">
          <div class="flex main-title">
            <img src="./images/icon_full.png" alt="" />
            <h2>FULL PACKAGE</h2>
          </div>
          <p class="description">
            When forming a new business or developing your own brand, there are many various aspects and activities to consider. Forming efficient consistency across all channels and all activities is fundamental to boost up your brand, build meaningful relationships with your stakeholders, partners, customers, and your audience.
          </p>
          <div class="sidetext flex">
            <img src="./images/img-services_full.png" alt="" />
            <div class="text">
              <hr />
              <h2>PLANS & STRATEGIES</h2>
              <p>
                Properly planning and strategizing any activity and asset you create from the start will also help you maintain a stable positive outcome throughout your journey, while also helping you make faster decisions and adapt to difficult situations easier.
              </p>
            </div>
          </div>
          <p>Our services for Full Package include:</p>
          <ul>
            <li><i class="fas fa-caret-right"></i>Creating content for your website</li>
            <li><i class="fas fa-caret-right"></i>Creative Design</li>
            <li><i class="fas fa-caret-right"></i>Continuous Support</li>
            <li><i class="fas fa-caret-right"></i>Content Creation</li>
            <li><i class="fas fa-caret-right"></i>Marketing Activities and Consultancy</li>
          </ul>
          <p>For more information, <a id="get-touch" class="full_gray" href="./#contacts">get in touch</a> with us!</p>
        </div>
        {/* @for($i = 0; $i < 500; $i++)
        <div class="ombra full_gray"></div>
        @endfor */}
      </div>
    </section>
  );
};