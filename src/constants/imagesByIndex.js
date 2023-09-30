import placeholderPhoto from "../assets/food/sushi.svg";
import placeholderMaki from "../assets/food/maki.jpg";
import placeholderNigiri from "../assets/food/nigiri.jpg";
import placeholderFood from "../assets/food/food.svg";

import LaxSushi from "../assets/food/LaxSushi.webp";
import LaxSushi2 from "../assets/food/LaxSushi2.webp";
import GrillLaxSushi from "../assets/food/GrillLaxSushi.jpg";

import RamenRäka from "../assets/food/RamenRäka2.jpg";

export const images = [RamenRäka, LaxSushi, LaxSushi2, GrillLaxSushi];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
