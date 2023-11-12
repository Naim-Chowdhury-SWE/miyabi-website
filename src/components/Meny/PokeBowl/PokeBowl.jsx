import Data from "../../../data/Meny/Pokebowl";
import "./PokeBowl.css";
import Menu from "../Meny";

const PokeBowl = () => {
  return <Menu menuData={Data} menuTitle="PokeBowl" id="PokebowlMeny" />;
};

export default PokeBowl;
