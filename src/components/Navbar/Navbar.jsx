import React from 'react'
import './Navbar.css'
import {assets} from "../../assets/assets.js";
const Navbar = () => {
  return (
    <div className="navbar">
        <img className='logo' src={assets.logo} alt="Admin Logo Image" />
        <img className='profile' src={assets.profile_image} alt="Admin Profile Photo" />
    </div>
  )
}

export default Navbar
