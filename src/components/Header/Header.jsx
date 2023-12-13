import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import "./Header.css";
const Header = () => {
  return (
    <header className="app__bg header">
      <h1 className="headtext__cormorant">Välkommen till Miyabi</h1>
      <div className="p__cormorant">
        <p className="header-p">
          Miyabi serverar spännande mat från det japanska köket veckans alla
          dagar.
        </p>
        <p className="header-p">
          Allt från olika typer av Sushi till California Rolls till Yakiniku.
        </p>
        <p className="header-p">
          Kolla in vår nya meny för <span className="gold">2024</span>
        </p>
      </div>
      {/* <a className="header" href="tel:+46763043985">
        <BsTelephoneFill />
        <p>Telefon</p>
        <p>076-304 39 85</p>
      </a>

      <a
        className="header"
        href="https://maps.app.goo.gl/jVynK1HvdsJKrXAx5"
        target="_blank"
        rel="noreferrer"
      >
        <FaLocationDot />
        <p>Address</p>
        <p>Kyrkvägen, Hersbyholms Stationshus, Lidingö</p>
      </a> */}
    </header>
  );
};

export default Header;
