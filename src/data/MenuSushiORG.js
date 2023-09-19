const menuSushi = [
  {
    id: 1,
    title: "Blandad 7 bitar",
    description: "Blandad sushi med lax, rullar och avocado",
    price: "89kr",
  },
  {
    id: 2,
    title: "Blandad 8 bitar",
    description: "Blandad sushi med lax, rullar och avocado",
    price: "99kr",
  },
  {
    id: 3,
    title: "Blandad 9 bitar",
    description: "Blandad sushi med lax, rullar, räkor och avocado",
    price: "109kr",
  },
  {
    id: 4,
    title: "Blandad 11 bitar",
    description: "Blandad sushi med lax, rullar, räkor och avocado",
    price: "129kr",
  },
  {
    id: 5,
    title: "Blandad 13 bitar",
    description: "Blandad sushi med lax, rullar, räkor och avocado",
    price: "149kr",
  },
  {
    id: 6,
    title: "Blandad 14 bitar",
    description: "Blandad sushi med lax, rullar, räkor och avocado",
    price: "159kr",
  },
  {
    id: 7,
    title: "Blandad 16 bitar",
    description: "Blandad sushi med lax, rullar, räkor och avocado",
    price: "179kr",
  },
  {
    id: 8,
    title: "Blandad 20 bitar",
    description: "Blandad sushi med lax, rullar, räkor och avocado",
    price: "219kr",
  },
  {
    id: 9,
    title: "Lax & Rullar 8 bitar",
    description: "Hälften lax & hälften rullar",
    price: "99kr",
  },
  {
    id: 10,
    title: "Lax & Rullar 10 bitar",
    description: "Hälften lax & hälften rullar",
    price: "119kr",
  },
  {
    id: 11,
    title: "Lax & Rullar 12 bitar",
    description: "Hälften lax & hälften rullar",
    price: "139kr",
  },
  {
    id: 12,
    title: "Vegetarisk/Vegansk 10 bitar",
    description:
      "Blandad sushi som innehåller Vegetariska rullar, Avocado och Tofu",
    price: "109kr",
  },
  {
    id: 13,
    title: "Vegetarisk/Vegansk 12 bitar",
    description:
      "Blandad sushi som innehåller Vegetariska rullar, Avocado och Tofu",
    price: "129kr",
  },
  {
    id: 14,
    title: "Mamma Sushi 10 bitar",
    description: "Blandad sushi men utan råfisk",
    price: "109kr",
  },
  {
    id: 15,
    title: "Mamma Sushi 12 bitar",
    description: "Blandad sushi men utan råfisk",
    price: "135kr",
  },
  {
    id: 16,
    title: "9 bitar Blandad Nigiri (utan rullar)",
    description: "Endast blandat med olika fisksorter",
    price: "119kr",
  },
  {
    id: 17,
    title: "12 bitar Blandad Nigiri (utan rullar)",
    description: "Endast blandat med olika fisksorter",
    price: "150kr",
  },
  {
    id: 18,
    title: "Lax Sushi 8 bitar",
    description: "Laxsushi",
    price: "120kr",
  },
  {
    id: 19,
    title: "Lax Sushi 10 bitar",
    description: "Laxsushi",
    price: "140kr",
  },
  {
    id: 20,
    title: "Lax Sushi 12 bitar",
    description: "Laxsushi",
    price: "160kr",
  },
  {
    id: 21,
    title: "Lax & Avocado Sushi 8 bitar",
    description: "Hälften lax och hälften avocado",
    price: "115kr",
  },
  {
    id: 22,
    title: "Lax & Avocado Sushi 10 bitar",
    description: "Hälften lax och hälften avocado",
    price: "125kr",
  },
  {
    id: 23,
    title: "Lax & Avocado Sushi 12 bitar",
    description: "Hälften lax och hälften avocado",
    price: "145kr",
  },
  {
    id: 24,
    title: "Lax & Räkor Sushi 8 bitar",
    description: "Hälften lax & hälften räkor",
    price: "115kr",
  },
  {
    id: 25,
    title: "Lax & Räkor Sushi 10 bitar",
    description: "Hälften lax & hälften räkor",
    price: "130kr",
  },
  {
    id: 26,
    title: "Lax & Räkor Sushi 12 bitar",
    description: "Hälften lax & hälften räkor",
    price: "150kr",
  },
  {
    id: 27,
    title: "Avocado Sushi 8 bitar",
    description: "Avocadosushi",
    price: "105kr",
  },
  {
    id: 28,
    title: "Avocado Sushi 10 bitar",
    description: "Avocadosushi",
    price: "125kr",
  },
  {
    id: 29,
    title: "Avocado Sushi 12 bitar",
    description: "Avocadosushi",
    price: "140kr",
  },
  {
    id: 30,
    title: "Räksushi 8 bitar",
    description: "Sushiräkor",
    price: "120kr",
  },
  {
    id: 31,
    title: "Räksushi 10 bitar",
    description: "Sushiräkor",
    price: "139kr",
  },
  {
    id: 32,
    title: "Räksushi 12 bitar",
    description: "Sushiräkor",
    price: "160kr",
  },
  {
    id: 33,
    title: "Grillad Lax med chilimajo 8 bitar",
    description: "Grillad laxsushi som toppas med chilimajonäs",
    price: "135kr",
  },
  {
    id: 34,
    title: "Grillad Lax med chilimajo 10 bitar",
    description: "Grillad laxsushi som toppas med chilimajonäs",
    price: "155kr",
  },
  {
    id: 35,
    title: "Grillad Lax med chilimajo 12 bitar",
    description: "Grillad laxsushi som toppas med chilimajonäs",
    price: "175kr",
  },
  {
    id: 36,
    title: "Familjesushi 30 bitar",
    description: "En stor blandad sushi med alla möjliga sushityper i erbjuder",
    price: "329kr",
  },
  {
    id: 37,
    title: "Familjesushi 40 bitar",
    description: "En stor blandad sushi med alla möjliga sushityper i erbjuder",
    price: "429kr",
  },
  {
    id: 38,
    title: "Familjesushi 50 bitar",
    description: "En stor blandad sushi med alla möjliga sushityper i erbjuder",
    price: "529kr",
  },
  {
    id: 39,
    title: "Familjesushi 70 bitar",
    description: "En stor blandad sushi med alla möjliga sushityper i erbjuder",
    price: "729kr",
  },
];

export default menuSushi;
