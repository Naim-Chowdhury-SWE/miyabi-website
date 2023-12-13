import "./Header.css";
const Header = () => {
  return (
    <header className="app__bg header">
      <h1 className="header-head">Välkommen till Miyabi</h1>
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
    </header>
  );
};

export default Header;
