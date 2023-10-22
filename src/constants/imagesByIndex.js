import LaxSushi from "../assets/food/LaxSushi.webp";
import BlandadSushi from "../assets/food/BlandadSushi.webp";
import Yakiniku from "../assets/food/Yakiniku.webp";
import GrillLaxSushi from "../assets/food/GrillLaxSushi.webp";

export const images = [LaxSushi, BlandadSushi, Yakiniku, GrillLaxSushi];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
