import logo from "../../constants/logos"

import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="app__bg section__padding">
      <div className="footer-logo">
      <img src={logo.logo3} alt="Miyabi Logo" />
      </div>

      <div className="info">
      <address className="p__opensans">
        Ni hittar oss på <br />
        <a href="https://maps.app.goo.gl/jVynK1HvdsJKrXAx5" target="_blank" rel="noreferrer">
        Kyrkvägen, Hersbyholms Stationshus, Lidingö
        </a>
        <a href="tel:+46763043985">
        <p>Telefon</p>
        <p>076-304 39 85</p>
      </a> 
      </address>

      <section className="p__opensans">
        <p>Öppettider</p>
        <p>Måndag-Lördag</p>
        <p>11:00 - 21:00</p>
        <p>Söndag</p>
        <p>12:00 - 21:00</p>
        </section>
      </div>
        
      <p className="p__opensans derp">OBS! Sista Beställning tas kl 20:30</p>
      <p className="p__opensans" style={{textAlign: "center"}}>{currentYear} &copy; Miabi AB</p>
      
    </footer>
  )
}

export default Footer