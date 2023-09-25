import { useState } from "react";
import "./NavBar.css";

import images from "../../constants/logos"

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="navbar app__bg">
         <div className="navbar-logo">
        <img src={images.miyabitextredwhite} alt="Miyabi Logo" />
        
        {/* <a className="p__opensans" href="tel:+46763043985">Tel: 076-304 39 85</a>
        <a className="p__opensans" href="https://maps.app.goo.gl/jVynK1HvdsJKrXAx5" target="_blank" rel="noreferrer">Address: Kyrkvägen, Hersbyholms Stationshus, Lidingö</a> */}
        </div>
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
        <img src={images.fanred} alt="Side Menu button" className="rotate" onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="navbar-smallscreen_overlay flex__center slide-bottom">
            <img src={images.fanred} alt="Side Menu button" className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="navbar-smallscreen-links">
              <li className="p__opensans">
              <a href="tel:+46763043985">Ring och Beställ</a>
              </li>
              <li className="p__opensans">
                <a href="https://app.fasterorder.se/menu/sv/37">Beställ Takeaway via vår App</a>
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