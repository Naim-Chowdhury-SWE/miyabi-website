import images from "../../constants/images";

const VarmratterMeny = [
  {
    title: "Yakiniku Normal",
    description: "Strimlad Entrecote, serveras med ris",
    price: "123kr",
    image: images.Yakiniku,
  },
  {
    title: "Yakiniku Stor",
    description: "Strimlad Entrecote, serveras med ris",
    price: "143kr",
    image: images.Yakiniku,
  },
  {
    title: "Yakitori Normal",
    description: "5 st Kycklingspett med yakitorisås, serveras med ris",
    price: "123kr",
    image: images.Yakitori,
  },
  {
    title: "Yakitori Stor",
    description: "7 st Kycklingspett med yakitorisås, serveras med ris",
    price: "143kr",
    image: images.Yakitori,
  },
  {
    title: "Yakiniku + 5 bitar sushi",
    description:
      "Strimlad Entrecote, serveras med ris samt med 5 bitar blandad sushi",
    price: "159kr",
    image: images.YakinikuSushi,
  },
  {
    title: "Bentolåda",
    description:
      "Yakiniku, Yakitori (2 kycklingspett) samt Sushi (2 rullar, 1 lax, 1 räka)",
    price: "149kr",
    image: images.Bento,
  },
  {
    title: " Miyabi Bento",
    description:
      "Yakiniku, Yakitori, Tempura (2st friterade jätträkor) samt Sushi (1 lax, 1 räka, 1 )",
    price: "165kr",
    image: images.BentoMiyabi,
  },
  {
    title: "Bento Deluxe",
    description:
      "Yakiniku, Yakitori, Tempura, Gyoza (2st) samt Sushi (1 lax, 1 räka, 1 tuna alt valfritt)",
    price: "185kr",
    image: images.BentoDeluxe,
  },
  {
    title: "Bento Gyoza",
    description: "Yakiniku, Yakitori och Gyoza (2st)",
    price: "185kr",
    image: images.BentoGyoza,
  },
  {
    title: "Gyoza 6 Bitar",
    description:
      "6 bitar blandfärsfyllda degknyten som serveras med ris och sås",
    price: "118kr",
    image: images.Gyoza,
  },
  {
    title: "Gyoza 8 Bitar",
    description:
      "8 bitar blandfärsfyllda degknyten som serveras med ris och sås",
    price: "138kr",
    image: images.Gyoza,
  },
  {
    title: "Vegetarisk Gyoza 6 Bitar",
    description: "6 bitar vegetariska degknyten som serveras med ris och sås",
    price: "118kr",
    image: images.Gyoza,
  },
  {
    title: "Vegetarisk Gyoza 8 Bitar",
    description: "6 bitar vegetariska degknyten som serveras med ris och sås",
    price: "138kr",
    image: images.Gyoza,
  },
  {
    title: "Yakisoba",
    description: "Wokad äggnudlar med entrecote, grönsaker",
    price: "149kr",
    image: images.Yakisoba,
  },
  {
    title: "Wokade räkor med grönsaker",
    description: "Serveras med ris eller nudlar",
    price: "149kr",
    image: images.WokadRakor,
  },
  {
    title: "Wokad kyckling med grönsaker",
    description: "Serveras med ris eller nudlar",
    price: "145kr",
    image: images.WokadKyckling,
  },
  {
    title: "Wokad biff med grönsaker",
    description: "Serveras med ris eller nudlar",
    price: "145kr",
    image: images.WokadBiff,
  },
  {
    title: "Tempura",
    description: "Friterade jätteräkor med grönsaker och ris",
    price: "150kr",
    image: images.Tempura,
  },
  {
    title: "Karaage",
    description: "Friterade kycklingbitar med ris samt sås",
    price: "150kr",
    image: images.Karaage,
  },
  {
    title: "Stekt Ris med Tofu",
    description: "Grönsaker samt sallad ingår",
    price: "149kr",
    image: images.StektRisVeg,
  },
  {
    title: "Stekt Ris med Entrecote",
    description: "Grönsaker samt sallad ingår",
    price: "149kr",
    image: images.StektRisEntrecote,
  },
  {
    title: "Stekt Ris med Kyckling",
    description: "Grönsaker samt sallad ingår",
    price: "149kr",
    image: images.StektRisKyckling,
  },
  {
    title: "Stekt Ris med Räkor",
    description: "Grönsaker samt sallad ingår",
    price: "149kr",
    image: images.StektRisRaka,
  },
  {
    title: "Lax Teriyaki",
    description: "Stekt Lax med wokade grönsaker, teriyakisås samt ris",
    price: "150kr",
    image: images.Laxteriyaki,
  },
  {
    title: "Vegetariska Vårrullar 7 bitar",
    description: "Serveras med ris sallad samt sås",
    price: "110kr",
    image: images.Varrullar7,
  },
  {
    title: "Vegetariska Vårrullar 10 Bitar",
    description: "Serveras med ris sallad samt sås",
    price: "125kr",
    image: images.Varrullar10,
  },
];

const Bibimbap = [
  {
    title: "Bibimbap Entrécôte",
    description: `Koreansk rätt som innehåller ris, olika typer av sallader, kimchi och starksås. Toppas med ett stekt ägg`,
    price: "139kr",
    image: images.BibimbapEntrecote,
  },
  {
    title: "Bibimbap Kyckling",
    description: `Koreansk rätt som innehåller ris, olika typer av sallader, kimchi och starksås. Toppas med ett stekt ägg`,
    price: "139kr",
    image: images.BibimbapKyckling,
  },
  {
    title: "Bibimbap Räkor",
    description: `Koreansk rätt som innehåller ris, olika typer av sallader, kimchi och starksås. Toppas med ett stekt ägg`,
    price: "139kr",
    image: images.BibimbapRaka,
  },
  {
    title: "Bibimbap Lax (Rå)",
    description: `Koreansk rätt som innehåller ris, olika typer av sallader, kimchi och starksås. Toppas med ett stekt ägg`,
    price: "139kr",
    image: images.BibimbapLax,
  },
  {
    title: "Bibimbap Tofu",
    description: `Koreansk rätt som innehåller ris, olika typer av sallader, kimchi och starksås. Toppas med ett stekt ägg`,
    price: "139kr",
    image: images.BibimbapTofu,
  },
  {
    title: "Bibimbap Mix",
    description: `Entrécôte, Kyckling samt räkor ingår i denna Bibimbap`,
    price: "139kr",
    image: images.BibimbapMix,
  },
];

const Soppor = [
  {
    title: "Uddon Entrecote",
    description: "Nudelsoppa gjord på Risnudlar, grönsaker samt entrecote",
    price: "145kr",
    image: images.UdonEntrecote,
  },
  {
    title: "Uddon Tempura",
    description:
      "Nudelsoppa gjord på Risnudlar grönsaker samt friterade grönsaker",
    price: "145kr",
    image: images.UdonTempura,
  },
  {
    title: "Uddon Vegetarisk",
    description: "Nudelsoppa gjord på Risnudlar samt grönsaker",
    price: "145kr",
    image: images.UdonVegetarisk,
  },
  {
    title: "Uddon Gyoza",
    description:
      "Nudelsoppa gjord på Risnudlar, grönsaker samt Gyoza (Kött eller Veg)",
    price: "145kr",
    image: images.UdonGyoza,
  },
  {
    title: "Ramen Kyckling",
    description: "Nudelsoppa gjord på äggnudlar, grönsaker och kokt ägg",
    price: "145kr",
    image: images.RamenKyckling,
  },
  {
    title: "Ramen Räka",
    description: "Nudelsoppa gjord på äggnudlar, grönsaker och kokt ägg",
    price: "145kr",
    image: images.RamenRaka,
  },
];

export default { VarmratterMeny, Bibimbap, Soppor };
