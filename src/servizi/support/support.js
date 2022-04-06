import "./support.scss"
/* import { getEngb_text } from "../../lingue/inglese"; */

export default function Support() {
  /* var engb_text = getEngb_text(); */
  return (
    <section class="container-services  continuous_yellow">
      <div class="card-mover">
          <div class="card">
            <div class="flex main-title">
              <img src="./images/icon_support.png" alt=""/>
              <h2>Continuous Support</h2>
            </div>
            <p class="description">
              Handling a website is no easy task. A website needs to be maintained, updated and monitored regularly in order to make sure it is running smoothly, the website pages and the message is being delivered accurately and the assets included in the pages are used and functions properly. Running SEO campaigns, inserting useful and clear keywords will also increase the visits to your website, hence put you higher up in the list of search engine research results. But having a website might not always be enough to establish a digital presence.
            </p>
            <div class="sidetext flex">
              <img src="./images/img-services_support.png" alt=""/>
              <div class="text">
                <hr/>
                <h2>PLANS & STRATEGIES</h2>
                <p>
                  An active digital presence might also include active social media accounts that are maintained and used regularly. Many businesses and individual works are already being carried over to, promoted and celebrated on social media, with millions being added each day. For many types of industries, a social media presence is not anymore, a good-to-have but a must.
                </p>
              </div>
            </div>
            <p>Our services for Continuous Support include:</p>
            <ul>
              <li><i class="fas fa-caret-right"></i>Maintenance and updates of your website</li>
              <li><i class="fas fa-caret-right"></i>Google ranking and analytics</li>
              <li><i class="fas fa-caret-right"></i>SEO (Search Engine Optimization) and SEM (Search Engine Marketing), keywords management</li>
              <li><i class="fas fa-caret-right"></i>Social media accounts creation and management</li>
            </ul>
            <p>For more information, <a id="get-touch" class=" continuous_yellow" href="./#contacts">get in touch</a> with us!</p>
          </div>
        {/*  @for($i = 0; $i < 500; $i++)
          <div class="ombra  continuous_yellow"></div>
          @endfor */}
      </div>
    </section>

  )
}