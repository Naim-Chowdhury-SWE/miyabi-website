import LaxSushi from "../assets/food/LaxSushi.webp";
import CaliforniaRollSpecial from "../assets/food/CaliforniaRollSpecial.webp";
import BentoDeluxe from "../assets/food/BentoDeluxe.webp";
import GrillLaxSushi from "../assets/food/GrillLaxSushi.webp";
import WokadKyckling from "../assets/food/WokadKyckling.webp";
import FamiljeSushiMedium from "../assets/food/FamiljeSushi40.webp";

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
