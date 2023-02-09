import React from 'react'
import './Gallary.css';
import galimg from '../../assets/images/gal1.jpg'
const Gallary = () => {
  return (
    <>
      <section className=' grid-container eve-gallary'>
        <div className="grid-element grid-elementbase">
          <div className='font-1'>EVENTS GALLERY</div>
          <div className='font-2'>Highlights of The Night</div>
        </div>
        <div className="grid-element grid-element1" style={{
      backgroundImage: `url(${galimg})`
    }}>1</div>
        <div className="grid-element grid-element2">2</div>
        <div className="grid-element grid-element3">3</div>
        <div className="grid-element grid-element4">4</div>

      </section>
    </>
  )
}

export default Gallary
