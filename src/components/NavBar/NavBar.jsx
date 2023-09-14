import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"

import "./NavBar.css";

import images from "../../constants/images"

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className="navbar">
        <div className="navbar-logo">
            <img src={images.logo2} alt="Miyabi Logo" />
      </div>
      
      <ul className="navbar-links">
        <li className="opensans">
          <a href="">Hem</a>
        </li>
        <li className="opensans">
          <a href="">Meny</a>
        </li>
        <li className="opensans">
          <a href="">Kontakta Oss</a>
        </li>
      </ul>

      <div className="navbar-homedelivery">
        <a href="" className="opensans">Faster Order</a>
        <div />
        <a href className="opensans">Wolt</a>
      </div>

      <div className="navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="navbar-smallscreen-overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-smallscreen-links">
            <li>
          <a href="" onClick={() => setToggleMenu(false)}>Hem</a>
        </li>
        <li>
          <a href="" onClick={() => setToggleMenu(false)}>Meny</a>
        </li>
        <li>
          <a href="" onClick={() => setToggleMenu(false)}>Kontakta Oss</a>
        </li>
            </ul>
          </div>
        )}
      </div>
      
    </nav>
  )
}

export default NavBar