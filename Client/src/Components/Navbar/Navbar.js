import React from 'react'
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar =()=>{

    const [icons,setIcon]=React.useState(false);
  return (
    <section className='nav-bg'>
      <div className="navbar">
        <ul className={icons ? "nav-item-mobile" : "nav-item "}
        onClick={()=> setIcon(false)}>
          <li className="item link-hover">
            <Link className="item"  to="/">Home </Link>
          </li>
          <li className="item">
            <Link className="item"  to="/about">Residence </Link>
          </li>
          <li className="item">
            <Link className="item"  to="/project">Events </Link>
          </li>
          <li className="item">
            <Link className="item"  to="/aboutKiet">About</Link>
          </li>
          <li className="item">
            <Link className="item"  to="/contact">ContactUs</Link>
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