import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import eve1 from "../../assets/eventimage/shivani.jpg";
import { useProductContext } from "../../context/eventContext";
import shiv1 from '../../assets/eventimage/shivani.jpg'
import shiv2 from '../../assets/eventimage/shivani2.jpg'
import shiv3 from '../../assets/eventimage/shivani3.jpg'
import shiv4 from '../../assets/eventimage/shivani4.JPG'
import "./Single.css";
import Footer from "../Footer/Footer";
const SingElement = () => {
  const { isLoading, events } = useProductContext();
  const id = useParams();
  const single_event = events.filter((curElem) => {
    return curElem.id == id.id;
  });
  console.log(single_event);
  return (
    <>
    
    <section className="single-event-section">
      <h1 className="eve-head-1">{single_event[0].title.slice(0,2)}<span className="land-head-span">{single_event[0].title.slice(2,-4)}</span>{single_event[0].title.slice(-4)}</h1>
      {/* sec-1  */}
    <div className="eve-sing-cont">
 <div className="des-cont">
  <h1 className="eve-head-2"> Event <span className="land-head-span">Descrip</span>tion -</h1>
  <p className="eve-para-1">
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo laborum corporis, voluptatem pariatur eligendi, cumque reiciendis dolorum vitae quis omnis inventore. Numquam ipsum deserunt sint, iste perspiciatis excepturi possimus, minus debitis repellat dignissimos sequi aliquam pariatur ex vero consequuntur voluptatibus?
  </p>
  
  <button className="btn-grad">REGISTER</button>

 </div>
 <img  className="eve-img" src={`https://drive.google.com/uc?id=${single_event[0].imgid}`} alt="eveent image" />
    </div>

{/* /sec-2 */}
    <div className="eve-desc">
      <div className="eve-head-3"><span className="land-head-span">Over</span>view <span className="land-head-span">O</span>f <span className="land-head-span">T</span>he Eve<span className="land-head-span">nt</span> </div>
      <div className="eve-des-det eve-para-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut cum, facilis quod itaque corrupti dolor. Ab tempore obcaecati, praesentium molestiae, doloribus dolore nulla error quas perferendis dolorum unde repellendus ipsa nostrum officiis cupiditate eum inventore eos culpa dolor earum rerum.</div>
    </div>

{/* sec-3  */}
<section className=' grid-container eve-gallary'>
        <div className="grid-element grid-elementbase">
          <div className='font-1'>EVE<span  className="land-head-span">NTS</span> GALL<span  className="land-head-span">ERY</span> </div>
          <div className='font-2'>Highlights of The Event</div>
        </div>
        <div className="grid-element grid-element1" style={{
      backgroundImage: `url(${shiv1})`
    }}>1</div>
        <div className="grid-element grid-element2" style={{
      backgroundImage: `url(${shiv2})`
    }}>2</div>
        <div className="grid-element grid-element3" style={{
      backgroundImage: `url(${shiv3})`
    }}>3</div>
        <div className="grid-element grid-element4" style={{
      backgroundImage: `url(${shiv4})`
    }}>4</div>

      </section>
      
    </section>
    <Footer/>

    
    </>
  );
};

export default SingElement;

{
  /* <div><button className="reg-btn">Register</button></div> */
}
