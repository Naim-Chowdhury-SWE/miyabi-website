import { useState, useEffect } from "react";
import ScrollLink from "../ScrollLink/ScrollLink";
import PropTypes from "prop-types";
import "./MenyNavbar.css";

const MenuNavbar = () => {
  const [activeSection, setActiveSection] = useState("LunchMeny");

  const menuSections = {
    LunchMeny: "Lunch",
    SushiMeny: "Sushi",
    NorimakiMeny: "Norimaki",
    SashimiMeny: "Sashimi",
    VarmratterMeny: "Varmrätter",
    SpecialMeny: "Special",
    BarnMeny: "Barn",
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sectionOffsets = Object.keys(menuSections).reduce(
      (offsets, section) => {
        offsets[section] = document.getElementById(section).offsetTop;
        return offsets;
      },
      {}
    );

    let active = "LunchMeny";
    for (const section in sectionOffsets) {
      if (scrollY >= sectionOffsets[section]) {
        active = section;
      }
    }

    setActiveSection(active);
    const menuNavbar = document.querySelector(".menu-navbar");

    if (scrollY < 1000) {
      menuNavbar.classList.add("hidden");
    } else {
      menuNavbar.classList.remove("hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menuItems = Object.keys(menuSections).map((section) => (
    <li key={section}>
      <ScrollLink targetId={section}>
        <a style={{ color: activeSection === section ? "#DCCA87" : "" }}>
          {menuSections[section]}
        </a>
      </ScrollLink>
    </li>
  ));

  return (
    <nav className={`menu-navbar ${scrollY > 100 ? "hidden" : ""}`}>
      <ul className="p__cormorant">{menuItems}</ul>
    </nav>
  );
};

MenuNavbar.propTypes = {
  menuData: PropTypes.string.isRequired,
  menuTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default MenuNavbar;
