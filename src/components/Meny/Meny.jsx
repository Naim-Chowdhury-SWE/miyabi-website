import "./Meny.css";
import PropTypes from "prop-types";

const Meny = () => {
  return (
    <div className="meny app__bg flex__center section__padding">
      <div className="meny-heading">
        <h1 className="headtext__cormorant">Meny</h1>
      </div>
    </div>
  );
};

Meny.propTypes = {
  menuTitle: PropTypes.string.isRequired,
};

export default Meny;
