import sushiData from '../../../data/Meny/Sushi';
import './Sushi.css';
import Menu from "../Meny";

const Sushi = () => {
  return <Menu menuData={sushiData} menuTitle="Sushi" />;
};

export default Sushi;