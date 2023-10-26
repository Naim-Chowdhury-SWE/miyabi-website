import { FaLocationDot } from "react-icons/fa6";
import { BsTelephoneFill } from "react-icons/bs";
import logo from "../../constants/logos";
import ScrollLink from "../ScrollLink/ScrollLink";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app__bg section__padding" id="Contact">
      <div className="footer-logo">
        <img src={logo.logo3} alt="Miyabi Logo" />
      </div>

      <div className="p__opensans info">
        <address>
          <div>
            <a
              href="https://maps.app.goo.gl/jVynK1HvdsJKrXAx5"
              target="_blank"
              rel="noreferrer"
            >
              <FaLocationDot style={{ marginRight: "0.5em" }} />
              Kyrkvägen, Hersbyholms Stationshus, Lidingö
            </a>
          </div>
          <div>
            <a href="tel:+46763043985">
              <BsTelephoneFill
                style={{
                  marginTop: "2em",
                  marginRight: "0.5em",
                }}
              />
              076-304 39 85
            </a>
          </div>
        </address>

        <section>
          <p>Öppettider</p>
          <p>Måndag-Lördag</p>
          <p>
            <time>11:00 - 21:00</time>
          </p>
          <p>Söndag</p>
          <p>
            <time>12:00 - 21:00</time>
          </p>
        </section>
      </div>

      <section className="p__opensans bottom">
        <p>
          OBS! Sista Beställning tas kl <time>20:30</time>
        </p>
        <ScrollLink targetId="Hem">
          <a href="#Hem">Till Toppen</a>
        </ScrollLink>
        <p>{currentYear} &copy; Miabi AB</p>
      </section>
    </footer>
  );
};

export default Footer;
