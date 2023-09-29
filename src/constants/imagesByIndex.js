import placeholderPhoto from "../assets/food/sushi.svg";
import placeholderMaki from "../assets/food/maki.jpg";
import placeholderNigiri from "../assets/food/nigiri.jpg";
import placeholderFood from "../assets/food/food.svg";

export const images = [
  placeholderPhoto,
  placeholderMaki,
  placeholderNigiri,
  placeholderFood,
];

const imageByIndex = (index) => images[index % images.length];

export default imageByIndex;
