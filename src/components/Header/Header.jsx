import "./Header.css"
const Header = () => {
  return (
    <div className="header app__bg p__opensans">
      <p>Telefon</p>
      <a href="tel:+46763043985">076-304 39 85</a>
      <p>Address</p>
      <a href="https://maps.app.goo.gl/jVynK1HvdsJKrXAx5" target="_blank" rel="noreferrer">Kyrkvägen, Hersbyholms Stationshus, Lidingö</a>
    </div>
  )
}

export default Header