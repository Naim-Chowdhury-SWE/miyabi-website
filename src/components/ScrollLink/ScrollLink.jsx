import PropTypes from "prop-types";

function ScrollLink({ targetId, children }) {
  const handleLinkClick = (event) => {
    event.preventDefault();
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div onClick={handleLinkClick} style={{ cursor: "pointer" }}>
      {children}
    </div>
  );
}

ScrollLink.propTypes = {
  targetId: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ScrollLink;
