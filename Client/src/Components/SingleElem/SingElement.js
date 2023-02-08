import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import eve1 from '../../assets/images/gal4.jpg'
import { useProductContext } from "../../context/eventContext";
import Navbar from "../Navbar/Navbar";
import './Single.css'
const SingElement = () => {
  const { isLoading, events } = useProductContext();
  const id = useParams();
  const single_event = events.filter((curElem) => {
    return curElem.id == id.id;
  });

  return (
   <div className="eve-main-cont">
<div className="eve-head-title">EVENT {single_event[0].title}</div>
      <div className="eve-cont">
      <img src={eve1} className="eve-img" alt="" />
 <div className="data">{single_event[0].discription}
 <div><button className="reg-btn">Register</button></div>
 </div>
 

      </div>
      </div>
  );
};

export default SingElement;
