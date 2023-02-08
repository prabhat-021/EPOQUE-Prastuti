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

const Home = () => {
    return (
        <>
        
        <section className='vid-1  sec-vid'>
            <Navbar/>
            <Landing className="landing-sec"/>
        </section>
            <section className='bg-1 sec'>
                <EventCard />
            </section>
            <section className='bg-2 sec sec-new'>
                <div className='sec-eve-nam'>UPCOMING EVENTS</div>
                <div className='sec-det-eve'>Best Music Events</div>
            </section>
            <section className=' sec-new bg-3 sec'>

                <div className='sec-eve-day'>Friday</div>
                <div className='sec-eve-day' >2/3/2022</div>
                <div className='sec-eve-nam'>King's Day Dance Party</div>
                <div className='sec-det-eve'>DJ SUPBASS / GROOVES / DJ ROOTBOY</div>
                <button className='btn' >Get Ticket</button>
            </section>
            <section className='sec-new bg-4 sec'>
                <div className='sec-eve-day'>SATURDAY</div>
                <div className='sec-eve-day' >22/10/2016</div>
                <div className='sec-eve-nam'>BIG CITY LIGHTS PARTY</div>
                <div className='sec-det-eve'>DJ SUPBASS / GROOVES / DJ ROOTBOY</div>
                <button className='btn' >Get Ticket</button>
            </section>
            <section className='sec-new bg-5 sec'>
                <div className='sec-eve-day'>SUNDAY</div>
                <div className='sec-eve-day' >23/10/2016</div>
                <div className='sec-eve-nam'>COCKTAIL LONG NIGHT PARTY</div>
                <div className='sec-det-eve'>DJ SUPBASS / GROOVES / DJ ROOTBOY</div>
                <button className='btn' >Get Ticket</button>
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
                        <div className='icon-h2'>1-800-123-1234</div>
                    </div>
                    <div className='icon-card'>
                        <GoLocation className='icon' />
                        <div className='icon-h1'>Address</div>
                        <div className='icon-h2'>BROOKLYN, NY 10036, UNITED STATES</div>
                    </div>
                    <div className='icon-card'>
                        <FiMail className='icon' />
                        <div className='icon-h1'>Mail</div>
                        <div className='icon-h2'>CLUB@EMAIL.NET</div>
                    </div>
                </section>
            </section>
            <section className="bg-7 sec sec-new">
                <div className="sec-eve-nam i">PRASTUTI</div>
                <div className="venue gap">
                    <FaFacebookF className='footer-icon'/>
                    <AiOutlineInstagram className='footer-icon'/>
                    <FaTwitter className='footer-icon'/>
                    <AiFillYoutube className='footer-icon'/>
                </div>
            </section>
        </>
    )

}

export default Home;