import React from 'react';
import Gallary from '../../components/Gallery/Gallary';
import './Home.css';
const Home = () =>{
return(
    <>
    <section className='bg-1 sec'></section>
    <section className='bg-2 sec'></section>
    <section className='bg-3 sec'>
        
   <div className='sec-eve-day'>Friday</div>
   <div className='sec-eve-day' >2/3/2022</div>
   <div className='sec-eve-nam'>King's Day Dance Party</div>
   <div className='sec-det-eve'>DJ SUPBASS / GROOVES / DJ ROOTBOY</div>
   <button className='btn' >Get Ticket</button>
    </section>
    <section className='bg-4 sec'>
    <div className='sec-eve-day'>SATURDAY</div>
   <div className='sec-eve-day' >22/10/2016</div>
   <div className='sec-eve-nam'>BIG CITY LIGHTS PARTY</div>
   <div className='sec-det-eve'>DJ SUPBASS / GROOVES / DJ ROOTBOY</div>
   <button className='btn' >Get Ticket</button>
    </section>
    <section className='bg-5 sec'>
    <div className='sec-eve-day'>SUNDAY</div>
   <div className='sec-eve-day' >23/10/2016</div>
   <div className='sec-eve-nam'>COCKTAIL LONG NIGHT PARTY</div>
   <div className='sec-det-eve'>DJ SUPBASS / GROOVES / DJ ROOTBOY</div>
   <button className='btn' >Get Ticket</button>
    </section>
    <section className='bg-6 sec'></section>


    <section className='bg-9 sec'>
    <div className='sec-venue'>VENUE & INFO</div>
   <div className='sec-ven-blw' >Have Some Questions?</div>
   <div className='boxes'>

    <div className='box'>
    <i className="fa-solid fa-mobile-screen"></i>
   <div className='fnt'>Phone</div>
   <h2>1-800-123-1234</h2>
   </div>

   <div className='box'>
   <i className="fa-sharp fa-solid fa-location-dot"></i>
   <div className='fnt'>Address</div>
   <h2>BROOKLYN, NY 10036, UNITED STATES</h2>
   </div>

   <div className='box'>
   <i className='fa-regular fa-envelope'></i>
   <div className='fnt'>Mail</div>
   <h2>CLUB@EMAIL.NET</h2>
   </div>

   </div>

    </section>

    <section className='footer'></section>

    <section className='eve-gallary'></section>
    </>
)

}

export default Home;