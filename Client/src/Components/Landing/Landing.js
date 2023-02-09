import React from "react";
import "./Landing.css";
import logo from '../../assets/eventimage/pralog.png'
const Landing = () => {
  return (

 <div className="land-cont">
  <img src={logo} alt="" className="logo" />
      <div className="font-4">INTER-COLLEGIATE ANNUAL FESTIVAL</div>
      <div className="font-3"><span className="land-head-span">PRASTUTI</span>  UNVEILING CREATIVITY </div>
      <div className="font-4"> 3rd & 4th MARCH 2023</div>
    </div>

   
  );
};
export default Landing;
