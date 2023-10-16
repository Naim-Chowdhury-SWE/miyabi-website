import LaxSushi from "../assets/food/LaxSushi.webp";
import LaxSushi2 from "../assets/food/LaxSushi2.webp";
import GrillLaxSushi from "../assets/food/GrillLaxSushi.webp";

export const images = [LaxSushi, LaxSushi2, GrillLaxSushi];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
