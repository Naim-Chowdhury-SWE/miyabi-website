import Data from "../../../data/Meny/Barn";
import "./Barn.css";
import Menu from "../Meny";

const Barn = () => {
  return <Menu menuData={Data} menuTitle="Barn" id="BarnMeny" />;
};

export default Barn;
