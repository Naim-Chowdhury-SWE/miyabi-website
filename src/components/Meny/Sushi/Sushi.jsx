import Data from "../../../data/Meny/Sushi";
import "./Sushi.css";
import Menu from "../Meny";

const Sushi = () => {
  return <Menu menuData={Data} menuTitle="Sushi" id="SushiMeny" />;
};

export default Sushi;
