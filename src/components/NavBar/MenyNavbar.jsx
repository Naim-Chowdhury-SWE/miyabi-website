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

    const screenWidth = window.innerWidth;

    // Check if the device is in landscape or portrait mode
    const isLandscape = window.matchMedia("(orientation: landscape)").matches;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    // Apply different scroll conditions based on screen width and orientation
    if (isLandscape) {
      switch (true) {
        case screenWidth >= 1400 && scrollY < 1000:
          menuNavbar.classList.add("hidden");
          break;
        case screenWidth <= 1399 && screenWidth >= 1100 && scrollY < 1100:
          menuNavbar.classList.add("hidden");
          break;
        case screenWidth <= 1099 && screenWidth >= 900 && scrollY < 1300:
          menuNavbar.classList.add("hidden");
          break;
        // Add more conditions as needed
        default:
          menuNavbar.classList.remove("hidden");
          break;
      }
    } else if (isPortrait) {
      // Apply conditions for portrait mode
      // You can define specific conditions for portrait mode here
      switch (true) {
        case screenWidth <= 899 && screenWidth >= 700 && scrollY < 1400:
          menuNavbar.classList.add("hidden");
          break;
        case screenWidth <= 699 && screenWidth >= 500 && scrollY < 600:
          menuNavbar.classList.add("hidden");
          break;
        case screenWidth <= 499 && screenWidth > 300 && scrollY < 800:
          menuNavbar.classList.add("hidden");
          break;
        default:
          menuNavbar.classList.remove("hidden");
          break;
      }
    }
  };

  // useEffect and rendering part should be outside handleScroll
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

/* switch (true) {
  case screenWidth >= 1400 && scrollY < 1000:
    menuNavbar.classList.add("hidden");
    break;
  case screenWidth <= 1399 && screenWidth >= 1100 && scrollY < 1100:
    menuNavbar.classList.add("hidden");
    break;
  case screenWidth <= 1099 && screenWidth >= 900 && scrollY < 1300:
    menuNavbar.classList.add("hidden");
    break;
  case screenWidth <= 899 && screenWidth >= 700 && scrollY < 1400:
    menuNavbar.classList.add("hidden");
    break;
  case screenWidth <= 699 && screenWidth >= 500 && scrollY < 600:
    menuNavbar.classList.add("hidden");
    break;
  case screenWidth <= 499 && screenWidth > 300 && scrollY < 800:
    menuNavbar.classList.add("hidden");
    break;
  default:
    menuNavbar.classList.remove("hidden");
    break;
} */
