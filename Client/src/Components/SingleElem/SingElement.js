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
  console.log(single_event);
  return (
    <>
      <Navbar />
      <section className="main">

        <h1 className="about">{single_event[0].title}</h1>
        <div className="moc">
          <div className="flex">
            <div className="font">
            <div className="eve-des-det">
            <div className="heading eve-head">Event Discription</div>
              {single_event[0].discription}
            </div>
              
            </div>
            <div className="scnd">
              <img className="img" src={eve1} width="" alt="" />
            </div>
          </div>
          <div className="heading-1">OVERVIEW</div>
          <br />
          <p className="abt-cont">Industry Connect is one of the three core principles of KIET Group of Institutions. The other two being <span className="bold">value driven and skill oriented.</span> KIET has developed a distinctive multi-level mechanism of its own to promote a unifying interface with industry. The <span className="bold"> Corporate Relations and Placement Centre </span> is equipped to create a pool of skilled human resource by guiding the students to reach their goals with perfection; towards this CRPC has also initiated the Internship & Industry Partnership Cell (IIPC) which follows the guidelines laid down under the Internship Policy of AICTE. The objective of IIPC is to structure and institutionalize Internship which is the most important aspect of Engineering, Management, Pharma Education in the country as it provides the pre-requisite hands-on practical experience of the workplace to the students. CRPC is piloted by a dedicated team. The department has successfully placed the students in reputed National & Multi-National Companies like TCS, Capgemini, Wipro, NTT Data, IBM, Samsung India Electronics, HUL, ION Trading, HSBC, ZS Associates, Kronos, Pernod Ricard, Sanmar, Atkins, Torrent Power and many more. The zeal and enthusiasm exhibited by premier companies for getting zero day slot, speaks for itself regarding the excellent quality of professionals churned out by the institute.</p>
          <br />
          <br />
        </div>

        <div className="flex-box">
          <div className="part">
            <div className="vision">VISION</div>
            <br />
            <p className="abt-cont">The vision of Corporate Relations and Placement Centre is to help students clarify their educational & career goals as well as acquire employment-seeking skills & ultimately attain desired employment.</p>
          </div>
          <br />
          <br />
          <div className="part">
            <div className="vision">MISSION</div>
            <br />
            <ul className="abt-cont">
              <li>Assist students develop/clarify their career interests</li><br />
              <li>Empower students with life-long career decision-making</li><br />
              <li>Provide resources and activities to facilitate the Career Planning Process</li><br />
              <li>Act as a link between Students, Alumni and Corporate</li><br />
              <li>Conduct Skill Enhancement Programs in collaboration with the industry and the H&S Department</li><br />
              <li>Assist students in obtaining final placement in reputed companies</li><br />
            </ul>
          </div>
        </div>
        <div className="img-2">
          {/* <img className="img-3" src={image2} alt="" /> */}
          <br />
          {/* <img className="img-3" src={image3} alt="" /> */}
        </div>

      </section>
    </>
  );
};

export default SingElement;

{/* <div><button className="reg-btn">Register</button></div> */ }