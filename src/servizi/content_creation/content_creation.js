import "./content_creation.scss"
/* import { getEngb_text } from "../../lingue/inglese"; */

 export default function ContentCreation() {
  /* var engb_text = getEngb_text(); */
  return (
    <section className="container-services  content_orange">
      <div className="card-mover">
        <div className="card">
          <div className="flex main-title">
            <img src="./images/icon_content.png" alt=""/>
              <h2>Content Creation</h2>
          </div>
            <p className="description">
              Your content is the most crucial asset you have. It identifies your brand, who you are, what you offer or deliver, helps you connect with your audience, fans, customers, future employers, as well as promote you and/or your brand and company.
            </p>
            <div className="sidetext flex">
              <img src="./images/img-services_content.png" alt=""/>
              <div className="text">
                <hr/>
                <h2>PLANS & STRATEGIES</h2>
                <p>
                  From what is written and seen on your website to the activities you do online, your message is always delivered through your content. By creating consistent, clear, informative content, you’re creating a library or information and resources about you, your brand or your business. Effective content and content creation strategies will help you foster better relationships with your audience and customers, as well as increase your recognition and reputation.
                </p>
              </div>
            </div>
            <p>Our services for Content Creation include:</p>
            <ul>
              <li><i className="fas fa-caret-right"></i>Creating content for your website</li>
              <li><i className="fas fa-caret-right"></i>Developing content for your social media accounts</li>
              <li><i className="fas fa-caret-right"></i>Content creation consultancy and improvements</li>
            </ul>
            <p>For more information, <a id="get-touch" className=" content_orange" href="./#contacts">get in touch</a> with us!</p>
          </div>
          {/* @for($i = 0; $i < 500; $i++)
          <div className="ombra  content_orange"></div>
          @endfor */}
      </div>
    </section>

  )
}