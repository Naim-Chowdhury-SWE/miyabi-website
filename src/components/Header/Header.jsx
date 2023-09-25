import { FaLocationDot } from "react-icons/fa6"
import {BsTelephoneFill} from "react-icons/bs"
import "./Header.css"
const Header = () => {
  return (
    <div className="app__bg p__opensans" >
      <a className="header" href="tel:+46763043985">
        <BsTelephoneFill />
        <p>Telefon</p>
        <p>076-304 39 85</p>
      </a>

      <a className="header" href="https://maps.app.goo.gl/jVynK1HvdsJKrXAx5" target="_blank" rel="noreferrer">
        <FaLocationDot />
        <p>Address</p>
        <p>Kyrkvägen, Hersbyholms Stationshus, Lidingö</p>
      </a>
    </div >  
    )
}

export default Header