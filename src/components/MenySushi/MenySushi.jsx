
import data from "../../data/MenuSushi";
import MenuItem from "../Menuitem/MenuItem";
import "./MenySushi.css";

const MenuSushi = () => {
    return (
        <div className="lunchMeny app__bg flex__center section__padding" id="lunchmeny">
            <div className="lunchMeny-title">
                <h1 className="headtext__cormorant">Sushi Meny</h1>
            </div>
            
            <div className="lunchMeny-meny">
                <div className="lunchMeny-meny-dagens">
                    <p className="lunchMeny-meny-heading">Sushi</p>
                        <div className="lunchMeny-meny-mat">
                        {data.MenySushi.map((item, index) => (
                        <MenuItem key={index} title={item.title} price={item.price} description={item.description} />
                        ))}
                        </div>    
                </div> 
                
            </div>
        </div>
)}
 
export default MenuSushi;