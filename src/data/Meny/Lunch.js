import images from "../../constants/images";

const lunchMeny1 = [
  {
    title: "Måndag",
    description: "Wokade Risnudlar med entrecote samt grönsaker",
    price: "125kr",
    image: images.RisnudlarEntrecote,
  },
  {
    title: "Tisdag",
    description: "Wokad kyckling med ris samt grönsaker",
    price: "125kr",
    image: images.WokadKyckling,
  },
  {
    title: "Onsdag",
    description: "Wokade glasnudlar med kyckling samt grönsaker",
    price: "125kr",
    image: images.placeholderPhoto,
  },
  {
    title: "Torsdag",
    description: "Yakisoba (Wokade äggnudlar med entrecote)",
    price: "125kr",
    image: images.Yakisoba,
  },
  {
    title: "Fredag",
    description: "Kyckling Karage (Friterad kyckling med ris samt sås)",
    price: "125kr",
    image: images.Karaage,
  },
];
const lunchMeny2 = [
  {
    title: "Blandad sushi 9/11/13 bitar",
    description: "Blandad sushi med lax, rullar, räkor och avocado",
    price: "108/128/149kr",
    image: images.BlandadSushi,
  },
  {
    title: "Bibimpab",
    description: "Med entrecote, kyckling, räkor eller lax (rå lax)",
    price: "139kr",
    image: images.BibimbapEntrecote,
  },
  {
    title: "Yakiniku",
    description: "Strimlad entrecôte med ris och teriyakisås",
    price: "123kr",
    image: images.Yakiniku,
  },
  {
    title: "Yakitori",
    description: "Kycklingspett med ris och teriyakisås",
    price: "123kr",
    image: images.Yakitori,
  },
  {
    title: "Pokébowl",
    description: "Med Lax, Tonfisk, Kyckling eller Tofu",
    price: "139kr",
    image: images.PokebowlLax,
  },
];

export default {
  lunchMeny1,
  lunchMeny2,
};
