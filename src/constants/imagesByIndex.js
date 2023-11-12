/* import LaxSushi from "../assets/food/LaxSushi.webp";
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
 */

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
    text: "Delicious Lax Sushi with a special touch.",
  },
  {
    src: CaliforniaRollSpecial,
    alt: "California Roll Special",
    text: "Our unique California Roll Special.",
  },
  {
    src: BentoDeluxe,
    alt: "Bento Deluxe",
    text: "Experience the luxury of our Bento Deluxe.",
  },
  {
    src: GrillLaxSushi,
    alt: "Grillad Lax Sushi",
    text: "Grilled Lax Sushi topped with flavorful ingredients.",
  },
  {
    src: WokadKyckling,
    alt: "Wokad Kyckling",
    text: "Savor the taste of our Wokad Kyckling.",
  },
  {
    src: FamiljeSushiMedium,
    alt: "Familje Sushi Medium",
    text: "Perfect for family gatherings - Familje Sushi Medium.",
  },
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
