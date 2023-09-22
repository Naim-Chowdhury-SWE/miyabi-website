// Norimaki.jsx
import norimakiData from '../../../data/Meny/Norimaki';
import "./Norimaki.css";
import Menu from "../Meny";

const Norimaki = () => {
  return <Menu menuData={norimakiData} menuTitle="Norimaki" />;
};

export default Norimaki;