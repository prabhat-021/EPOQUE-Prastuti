import React from 'react';
import "./EventCard.css";
import { EventData } from "./EventData.js";
import image from "../../assets/demoImages/dummy.jpeg";

function ncard(val) {
    return (
        <EventCard1
            key={val.id}
            image={val.image}
            title={val.title}
            discription={val.discription}
        />
    );
}

function EventCard1(props) {
    return (
        <div className="container">
            {/* <div className="event-img"> */}
                <img className="img1" src={props.image} alt="image" />
            {/* </div> */}
            <div className="event-title">
                {props.title}
            </div>
            <div className="event-dis">
                {props.discription}
            </div>
            <a className="button">Expolre More</a>
        </div>
    );
}

export default function EventCard() {
    return (
        <>
            <section className="event-section">
                <h2 className="event-h1">FEEL THE RHYTHM</h2>
                <h2 className="event-h1">OF THE ENDLESS NIGHT!</h2>
                <section className="event-grid">
                    {EventData.map(ncard)}
                </section>
            </section>
        </>
    )
}
