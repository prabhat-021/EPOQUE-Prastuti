import React from 'react';
import Gallary from '../../components/Gallery/Gallary';
import './Home.css';
import EventCard from "../../components/RythemEvent/EventCard.js"; 

const Home = () =>{
return(
    <>
    <section className='bg-1 sec'>
        <EventCard />
    </section>
    <section className='bg-2 sec'></section>
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
    <section className='bg-6 sec'></section>

   <section><Gallary/></section>

    <section className='sec sec-btn'>
        <button className='btn'>ALL GALARY</button>
    </section>
    <section className='bg-6 sec'></section>
    <section className='bg-6 sec'></section>
    </>
)

}

export default Home;