import React from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css'
const Navbar =()=>{

    const [icons,setIcon]=React.useState(false);
  return (
    <section className='nav-bg'>
      <div className="navbar">
        <ul className={icons ? "nav-item-mobile" : "nav-item "}
        onClick={()=> setIcon(false)}>
          <li className="item link-hover">
            <a className="item"  href="/">Home </a>
          </li>
          <li className="item">
            <a className="item"  href="/about">Residence </a>
          </li>
          <li className="item">
            <a className="item"  href="/project">Events </a>
          </li>
          <li className="item">
            <a className="item"  href="/about">About</a>
          </li>
          <li className="item">
            <a className="item"  href="/Team">Team</a>
          </li>

          
        </ul>
        <button className="nav-icon"
        onClick={()=> setIcon(!icons)}>
        {icons ? <CloseIcon /> : <DehazeIcon />  }
          </button>
      </div>
    </section>
  )
}
export default Navbar