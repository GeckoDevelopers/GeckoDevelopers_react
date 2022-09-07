import "./servizi.scss";

export default function Design() {

   return (
      <section className="container-services design_dk_green">
         <div className="card-mover design_dk_green">
            <div className="card">
               <div className="flex main-title">
                  <img src="./img/icon_creative.png" alt="" />
                  <h2>Creative Design</h2>
               </div>
               <p className="description">
                  As simple as it may sound, having professionally done visual assets, from your logo to a video or imagery, not only provides consistency and visual appeal, but can also boost up the credibility of your brand, establish meaningful relationships with your customers and target audience, as well as deliver your message across more efficiently.
               </p>
               <div className="sidetext flex">
                  <img src="./img/img-services_creative.webp" alt="" />
               </div>
               <p>Our services for Creative Design include:</p>
               <ul>
                  <li><i className="fas fa-caret-right"></i>Logo design</li>
                  <li><i className="fas fa-caret-right"></i>Web design</li>
                  <li><i className="fas fa-caret-right"></i>Sound design</li>
                  <li><i className="fas fa-caret-right"></i>Video creation and editing</li>
                  <li><i className="fas fa-caret-right"></i>Imagery</li>
                  <li><i className="fas fa-caret-right"></i>Motion graphics</li>
               </ul>
               <p>For more information, <a id="get-touch" className=" design_dk_green" href="./#contacts">get in touch</a> with us!</p>
            </div>
         
         </div>
      </section>

   )
}