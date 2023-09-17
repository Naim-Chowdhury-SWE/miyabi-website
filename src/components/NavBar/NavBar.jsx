import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"

import "./NavBar.css";

import images from "../../constants/images"

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
         <div className="navbar-logo">
            <img src={images.logowhite} alt="Miyabi Logo" />
        </div>
      {/* <section className="upper">
        <div className="homedelivery">
        <a href="" className="opensans">Beställ och hämta med <span>Faster Order</span></a>
        </div>
        <div className="homedelivery">
        <a href="" className="opensans">Beställ hemkörning med <span>Wolt</span></a>
        </div>
      </section> */}
      <ul className="navbar-links">
        <li className="p__opensans">
          <a href="">Hem</a>
        </li>
        <li className="p__opensans">
          <a href="">Meny</a>
        </li>
        <li className="p__opensans">
          <a href="">Kontakta Oss</a>
        </li>
      </ul>
      <div className="navbar-login">
        <a href="" className="p__opensans">Faster Order</a>
        <div />
        <a href="" className="p__opensans">Wolt</a>
      </div>

      <div className="navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} style={{ cursor: "pointer" }} />

        {toggleMenu && (
          <div className="navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-smallscreen-links">
            <li className="p__opensans">
          <a href="">Hem</a>
        </li>
        <li className="p__opensans">
          <a href="">Meny</a>
        </li>
        <li className="p__opensans">
          <a href="">Kontakta Oss</a>
        </li>
            </ul>
          </div>
        )}
      </div>
      
    </nav>
  )
}

export default NavBar