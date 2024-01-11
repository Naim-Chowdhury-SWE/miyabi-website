import LaxSushi from "https://sushi-lidingo.se/images/food/LaxSushi.webp";
import CaliforniaRollSpecial from "https://sushi-lidingo.se/images/food/CaliforniaRollSpecial.webp";
import BentoDeluxe from "https://sushi-lidingo.se/images/food/BentoDeluxe.webp";
import GrillLaxSushi from "https://sushi-lidingo.se/images/food/GrillLaxSushi.webp";
import WokadKyckling from "https://sushi-lidingo.se/images/food/WokadKyckling.webp";
import FamiljeSushiMedium from "https://sushi-lidingo.se/images/food/FamiljeSushi40.webp";

export const images = [
  {
    src: LaxSushi,
    alt: "Lax Sushi",
  },
  {
    src: CaliforniaRollSpecial,
    alt: "California Roll Special",
  },
  {
    src: BentoDeluxe,
    alt: "Bento Deluxe",
  },
  {
    src: GrillLaxSushi,
    alt: "Grillad Lax Sushi",
  },
  {
    src: WokadKyckling,
    alt: "Wokad Kyckling",
  },
  {
    src: FamiljeSushiMedium,
    alt: "Familje Sushi",
  },
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
