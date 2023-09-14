import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"

import "./NavBar.css";

import images from "../../constants/images"

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="site__navbar">
        <div className="site__navbar-logo">
            <img src={images.logo} alt="Miyabi Logo" />
      </div>
      
      <ul className="site__navbar-links">
        <li>
          <a href="">Hem</a>
        </li>
        <li>
          <a href="">Meny</a>
        </li>
        <li>
          <a href="">Kontakta Oss</a>
        </li>
      </ul>

      <nav className="site__navbar-homedelivery">
        <a href="">Faster Order</a>
        <div />
        <a href="Wolt"></a>
      </nav>
      
    </div>
  )
}

export default NavBar