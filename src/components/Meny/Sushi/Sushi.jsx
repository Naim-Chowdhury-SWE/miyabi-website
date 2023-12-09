import {
  blandadSushi2,
  menuSushi2,
  familjeSushi2,
} from "../../../data/Meny/Sushi2";
import "./Sushi.css";
import Meny from "../Meny";

const Sushi = () => {
  return (
    <>
      <Meny menuTitle="Derp" />
      <>
        {blandadSushi2.map((category, index) => (
          <Meny key={index} menuData={category} id={`SushiMeny${index}`} />
        ))}
      </>
      {/* <>
        {menuSushi2.map((category, index) => (
          <Meny key={index} menuData={category} id={`SushiMeny${index}`} />
        ))}
      </>
      <>
        {familjeSushi2.map((category, index) => (
          <Meny key={index} menuData={category} id={`SushiMeny${index}`} />
        ))}
      </> */}
    </>
  );
};

export default Sushi;
