import Data from '../../../data/Meny/Sushi';
import './Sushi.css';
import Menu from "../Meny";

const Sushi = () => {
  return <Menu menuData={Data} menuTitle="Sushi" id="Meny" />;
};

export default Sushi;