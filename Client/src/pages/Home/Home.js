import React from 'react';
import Gallary from '../../components/Gallery/Gallary';
import './Home.css';
import { BsPhone } from 'react-icons/bs';
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiOutlineInstagram, AiFillYoutube } from "react-icons/ai";

import EventCard from "../../components/RythemEvent/EventCard.js";
import Landing from '../../components/Landing/Landing';
import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer.js";

const Home = () => {
    return (
        <>
         <Navbar/>
        <section className='vid-1  sec-vid'>
            <Landing/>
        </section>
            <section className='bg-1 sec'>
                <EventCard />
            </section>
            <section className='bg-2 sec sec-new'>
                <div className='sec-eve-nam'><span className='land-head-span'>UPCOMING</span>  EVENTS</div>
                <div className='sec-det-eve'>Best Music Events</div>
            </section>
            <section className=' sec-new bg-3 sec'>
<div className='eve-box'><div className='sec-eve-day'>Friday</div>
                <div className='sec-eve-day' >2/3/2022</div>
                <div className='sec-eve-nam'><span className='land-head-span'>सुर-ए</span> -SAAZ</div>
                <div className='sec-det-eve'>GROUP SINGING</div>
                <button className='btn' >Get Ticket</button></div>
                
            </section>
            <section className='sec-new bg-4 sec'>
            <div className="eve-box">
                <div className='sec-eve-day'>SATURDAY</div>
                <div className='sec-eve-day' >2/3/2022</div>
                <div className='sec-eve-nam'><span className='land-head-span'>PRAC</span>HAND</div>
                <div className='sec-det-eve'>NUKKAD NATAK</div>
                <button className='btn' >Get Ticket</button>
                </div>
                
            </section>
            <section className='sec-new bg-5 sec'>
                <div className="eve-box"> <div className='sec-eve-day'>SUNDAY</div>
                <div className='sec-eve-day' >2/3/2022</div>
                <div className='sec-eve-nam'> <span className='land-head-span'>BATTLE</span> OF </div>
                <div className='sec-eve-nam'>BANDS</div>
                <div className='sec-det-eve'>BAND WAR</div>
                <button className='btn' >Get Ticket</button></div>
               
            </section>

            <section><Gallary /></section>

            <section className='sec sec-btn'>
                <button className='btn'>ALL GALARY</button>
            </section>
            <section className='bg-6 sec sec-new'>
                <div className="sec-eve-nam">VENUE & INFO</div>
                <div className="sec-det-eve">Have Some Questions?</div>
                <section className='venue'>
                    <div className='icon-card'>
                        <BsPhone className='icon' />
                        <div className='icon-h1'>Phone</div>
                        <div className='icon-h2'>8299550885</div>
                    </div>
                    <div className='icon-card'>
                        <GoLocation className='icon' />
                        <div className='icon-h1'>Address</div>
                        <div className='icon-h2'>MUSKAN HOSTEL KIET</div>
                    </div>
                    <div className='icon-card'>
                        <FiMail className='icon' />
                        <div className='icon-h1'>Mail</div>
                        <div className='icon-h2'>aryantiwari@mail.com</div>
                    </div>
                </section>
            </section>
            <section className="bg-7 sec sec-new">
                <div className="sec-eve-nam i"><span className='land-head-span'>PRAS</span>TUTI</div>
                <div className="venue gap">
                   <a className='icon-link' href=""><FaFacebookF className='footer-icon'/></a> 
                   <a className='icon-link' href=""><AiOutlineInstagram className='footer-icon'/></a> 
                  <a className='icon-link' href=""><FaTwitter className='footer-icon'/></a>  
                   <a className='icon-link' href=""><AiFillYoutube className='footer-icon'/></a> 
                </div>
            </section>
            <Footer />
        </>
    )

}

export default Home;