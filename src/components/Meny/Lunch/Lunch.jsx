import data from "../../../data/Meny/Lunch";
import MenuItem from "../../Menuitem/MenuItem";
import "./Lunch.css";

const Lunch = () => {
  return (
    <div
      className="lunchMeny app__bg flex__center section__padding"
      id="LunchMeny"
    >
      <div className="lunchMeny-title">
        <h1 className="headtext__cormorant">Lunch Meny</h1>
        <p className="p__cormorant">
          Lunchen gäller vardagar mellan kl <time>11:00 och 14:00</time>
        </p>
      </div>

      <div className="lunchMeny-meny">
        <div className="lunchMeny-meny-dagens">
          <p className="lunchMeny-meny-heading">Dagens Rätt</p>
          <div className="lunchMeny-meny-mat">
            {data.lunchMeny1.map((lunch, index) => (
              <MenuItem
                key={lunch.title + index}
                image={lunch.image}
                title={lunch.title}
                price={lunch.price}
                description={lunch.description}
              />
            ))}
          </div>
        </div>

        <div className="lunchMeny-meny-dagens2">
          <p className="lunchMeny-meny-heading">Finns varje dag</p>
          <div className="lunchMeny-meny-mat">
            {data.lunchMeny2.map((lunch, index) => (
              <MenuItem
                key={lunch.title + index}
                image={lunch.image}
                title={lunch.title}
                price={lunch.price}
                description={lunch.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lunch;
