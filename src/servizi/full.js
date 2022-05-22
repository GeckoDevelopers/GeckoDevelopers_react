import './servizi.scss';
/* import { getEngb_text } from "../../lingue/inglese"; */


export default function FullServices () {
  /* var engb_text = getEngb_text(); */
  return (
    <section className="container-services full_gray ">
      <div className="card-mover full_gray">
        <div className="card">
          <div className="flex main-title">
            <img src="./img/icon_full.png" alt="" />
            <h2>FULL PACKAGE</h2>
          </div>
          <p className="description">
            When forming a new business or developing your own brand, there are many various aspects and activities to consider. Forming efficient consistency across all channels and all activities is fundamental to boost up your brand, build meaningful relationships with your stakeholders, partners, customers, and your audience.
          </p>
          <div className="sidetext flex">
            <img src="./img/img-services_full.webp" alt="" />
            <div className="text">
              <hr />
              <h2>PLANS & STRATEGIES</h2>
              <p>
                Properly planning and strategizing any activity and asset you create from the start will also help you maintain a stable positive outcome throughout your journey, while also helping you make faster decisions and adapt to difficult situations easier.
              </p>
            </div>
          </div>
          <p>Our services for Full Package include:</p>
          <ul>
            <li><i className="fas fa-caret-right"></i>Creating content for your website</li>
            <li><i className="fas fa-caret-right"></i>Creative Design</li>
            <li><i className="fas fa-caret-right"></i>Continuous Support</li>
            <li><i className="fas fa-caret-right"></i>Content Creation</li>
            <li><i className="fas fa-caret-right"></i>Marketing Activities and Consultancy</li>
          </ul>
          <p>For more information, <a id="get-touch" className="full_gray" href="./#contacts">get in touch</a> with us!</p>
        </div>
        {/* @for($i = 0; $i < 500; $i++)
        <div className="ombra full_gray"></div>
        @endfor */}
      </div>
    </section>
  );
};

