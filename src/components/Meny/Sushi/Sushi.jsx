import Data from "../../../data/Meny/Sushi2";
import "./Sushi.css";
import Meny from "../Meny";

const Sushi = () => {
  return (
    <>
      {Data.map((category, index) => (
        <Meny
          key={index}
          menuData={category}
          menuTitle="Sushi"
          id={`SushiMeny${index}`}
        />
      ))}
    </>
  );
};

export default Sushi;
