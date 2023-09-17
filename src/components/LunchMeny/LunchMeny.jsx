import data from '../../constants/data';
import MenuItem from '../MenuItem/MenuItem';
import "./LunchMeny.css";

const LunchMeny = () => {
    return (
        <div className="lunchMeny app__bg flex__center section__padding" id="lunchmeny">
            <div className="lunchMeny-title">
                <h1 className="headtext__cormorant">Lunch Meny</h1>
            </div>
            
            <div className="lunchMeny-meny">
                <div className="lunchMeny-meny-dagens">
                    <p className="lunchMeny-meny-heading">Dagens Rätt</p>
                        <div className="lunchMeny-meny-mat">
                        {data.lunchMeny1.map((lunch, index) => (
                        <MenuItem key={lunch.title + index} title={lunch.title} price={lunch.price} description={lunch.description} />
                        ))}
                        </div>
                    
                </div> 

                <div className="lunchMeny-meny-dagens2">
                    <p className="lunchMeny-meny-heading">Dagens Rätt</p>
                        <div className="lunchMeny-meny-mat">
                        {data.lunchMeny2.map((lunch, index) => (
                        <MenuItem key={lunch.title + index} title={lunch.title} price={lunch.price} description={lunch.description} />
                        ))}
                        </div>
                    
                </div> 

            </div>
        </div>
)}
 
export default LunchMeny;