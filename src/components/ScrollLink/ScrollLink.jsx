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
    <a href={`#${targetId}`} onClick={handleLinkClick}>
      {children}
    </a>
  );
}
ScrollLink.propTypes = {
  targetId: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default ScrollLink;
