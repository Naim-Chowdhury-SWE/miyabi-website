import menuSushi from "../../data/MenySushi"; // Import your updated data
import "./MenySushi.css"; // Import your CSS for styling

const MenySushi = () => {
  return (
    <div className="menySushi app__bg flex__center section__padding">
      <div className="meny-sushi-heading">
          <h1 className="headtext__cormorant">Sushi Meny</h1>
      </div>
      
      <div>
        {menuSushi.map((item, index) => (
          <div key={index} className="meny-sushi-meny">
            <h4 className="menu-title p__cormorant" style={{color: "#DCCA87"}}>{item.title}</h4>
          <p className="">{item.description}</p>
          <p className="">{item.price}</p>     
        </div>
        ))}
      </div>
      
    </div>
  );
};

export default MenySushi;
