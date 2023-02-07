import React from 'react';
import './Home.css';
import EventCard from "../../Components/RythemEvent/EventCard.js"; 

const Home = () =>{
return(
    <>
    <section className='bg-1 sec'>
        <EventCard />
    </section>
    <section className='bg-2 sec'></section>
    <section className='bg-3 sec'></section>
    <section className='bg-4 sec'></section>
    <section className='bg-5 sec'></section>
    <section className='bg-6 sec'></section>
    </>
)

}

export default Home;