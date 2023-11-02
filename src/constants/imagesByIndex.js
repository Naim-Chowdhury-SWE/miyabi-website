import LaxSushi from "../assets/food/LaxSushi.webp";
import CaliforniaRollSpecial from "../assets/food/CaliforniaRollSpecial.webp";
import BentoDeluxe from "../assets/food/BentoDeluxe.webp";
import GrillLaxSushi from "../assets/food/GrillLaxSushi.webp";
import WokadKyckling from "../assets/food/WokadKyckling.webp";
import FamiljeSushiMedium from "../assets/food/FamiljeSushi40.webp";

export const images = [
  LaxSushi,
  CaliforniaRollSpecial,
  BentoDeluxe,
  GrillLaxSushi,
  WokadKyckling,
  FamiljeSushiMedium,
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
