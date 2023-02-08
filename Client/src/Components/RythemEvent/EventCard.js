import React from 'react';
import "./EventCard.css";
import ima1 from '../../assets/eventimage/fashion.JPG';

import { useProductContext } from "../../context/eventContext";
import { NavLink } from 'react-router-dom';
// function ncard(val) {
    
//     return (
//         <EventCard1
//             key={val.id}
//             image={val.image}
//             title={val.title}
//             discription={val.discription}
//         />
//     );
// }

function EventCard1(props) {
    const {id} = props
    return (
        <NavLink className="ele-rout" to={`/singleElement/${id}`}>
        <div className="container">
            {/* <div className="event-img"> */}
                <img className="img1" src={ima1} alt="image" />

            {/* </div> */}
            <div className="event-title">
                {props.title}
            </div>
            <div className="event-dis">
                {props.discription}
            </div>
            <a className="button">Expolre More</a>
        </div>
        </NavLink>
    );
}

export default function EventCard() {
    const {isLoading,featureEvents} = useProductContext();
    console.log(featureEvents);

    if(isLoading === true) {
        return <div>..Loading</div>
    }
    return (
        <>
            <section className="event-section">
                <div className='eve-head'>
                <h2 className="event-h1">FEEL THE RHYTHM</h2>
                <h2 className="event-h1">OF THE ENDLESS NIGHT!</h2>
                </div>
              
                <section className="event-grid">
                    {featureEvents.map((curEle)=>{return <EventCard1 key={curEle.id} {...curEle}/>})}
                </section>
            </section>
        </>
    )
}
