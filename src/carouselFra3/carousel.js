import './carousel.scss';
import { getEngb_text } from "../lingue/inglese";
import { Link } from "react-router-dom";

export default function Carousel() {
  var engb_text = getEngb_text();




  function Progression() {

    
  }

  return (
    <section>
      <a href="https://www.google.it/?gfe_rd=ctrl&ei=OJLpUt_mBtDW8gfAnICwAw&gws_rd=cr" target="_blank"><img src="./img/img_nature_wide.jpg" style={{width:"100%"}} /></a>
      <a href="https://www.google.it/?gfe_rd=ctrl&ei=OJLpUt_mBtDW8gfAnICwAw&gws_rd=cr" target="_blank"><img src="./img/img_snow_wide.jpg" style={{width:"100%"}} /></a>
      <a href="https://www.google.it/?gfe_rd=ctrl&ei=OJLpUt_mBtDW8gfAnICwAw&gws_rd=cr" target="_blank"><img src="./img/img_mountains_wide.jpg" style={{width:"100%"}} /></a>
      
      <div className="prev" >❮</div>
      <div className="next" >❯</div>

      <div className='dots'>
        <span className="dot"></span> 
        <span className="dot"></span> 
        <span className="dot"></span> 
      </div>
      
    </section>
  );
};