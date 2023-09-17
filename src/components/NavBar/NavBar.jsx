import { useState } from "react";
/* import { GiHamburgerMenu } from "react-icons/gi" 
import { MdOutlineRestaurantMenu } from "react-icons/md"
 */
import "./NavBar.css";

import images from "../../constants/images"

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar">
         <div className="navbar-logo">
            <img src={images.miyabitextredwhite} alt="Miyabi Logo" />
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
        <a href="https://app.fasterorder.se/menu/sv/37" className="p__opensans">Beställ Takeaway</a>
        <div />
        <a href="https://wolt.com/sv/swe/stockholm/restaurant/miyabi" className="p__opensans">Hemleverans med Wolt</a>
      </div>

      <div className="navbar-smallscreen">
        {/* <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} style={{ cursor: "pointer" }} /> */}
        <img src={images.fanred} alt="Side Menu button" onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="navbar-smallscreen_overlay flex__center slide-bottom">
            {/* <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} /> */}
            <img src={images.fanred} alt="Side Menu button" className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="https://app.fasterorder.se/menu/sv/37">Beställ Takeaway</a>
              </li>
              <li className="p__opensans">
                <a href="https://wolt.com/sv/swe/stockholm/restaurant/miyabi">Hemleverans med Wolt</a>
              </li>
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