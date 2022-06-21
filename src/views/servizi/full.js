import './servizi.scss';
import { useTranslation } from 'react-i18next';

/* import { getita_text } from "../../lingue/inglese"; */


export default function FullServices () {
  /* var ita_text = getita_text(); */
  const { t } = useTranslation();
  var par4 = t(`full.paragrafo4`, { returnObjects: true })
  var ulist = []
  /*t(`full.paragrafo4`, { returnObjects: true }).forEach(e => {
    ulist.push(<li><i className="fas fa-caret-right"></i>{e}</li>)
  }); */

  for (let i = 0; i < par4.length; i++) {
    ulist.push(<li><i className="fas fa-caret-right"></i>{par4[i]}</li>)
  }


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
            {ulist}
          </ul>
          <p>For more information, <a id="get-touch" className="full_gray" href="./#contacts">get in touch</a> with us!</p>
        </div>
      </div>
    </section>
  );
};

