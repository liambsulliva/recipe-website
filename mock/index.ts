export type carbRecipe = {
  title: string;
  description: string;
  img: string;
  ingredients: string[];
  steps: string[];
};

export const carbRecipes: carbRecipe[] = [
  {
    title: "Beef Noodle Skillet",
    description: "The Protein Powerhouse.",
    img: "https://images.unsplash.com/photo-1608219992759-8d74ed8d76eb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "2 tbsp Butter",
      "Diced Onion (1 tbsp Onion Powder)",
      "3 Minced Garlic Cloves (3/8 tsp Garlic Powder)",
      "1lb Ground Beef (Can sub with impossible)",
      "1 tbsp tomato puree",
      "3/4lb Noodles",
      "2 1/2 Cups Beef Broth",
      "1 tbsp whole grain mustard",
      "1 tsp paprika",
      "2 tsp Worcestershire Sauce",
      "1/3 Cup Plain Greek Yogurt",
      "2 tbsp half and half",
      "Salt/Pepper",
    ],
    steps: [
      "Heat butter in a large skillet. Medium Heat.",
      "Add Onion and Garlic, char for 1 minute.",
      "Add beef, season with salt and pepper.",
      "Simmer beef for about 5 minutes until cooked through.",
      "Add noodles, broth, 1 cup water, mustard, paprika, and worcestershire.",
      "Bring to simmer. Cook pasta al dente, adding water if needed. About 12 minutes.",
      "Add in half and half + greek yogurt, stir for 1 minute.",
    ],
  },
  {
    title: "Mac n' Cheese",
    description: "Deliciously Decadent.",
    img: "https://images.unsplash.com/photo-1646953568310-8def6eb5a317?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "1/4lbs Rigatoni Pasta",
      "2 tbsp Unsalted Butter",
      "1lbs Grated Cheddar",
      "1 Cup Cottage Cheese",
      "2 Cups Milk (Any Type)",
      "1 tsp Dry Mustard",
      "1/2 Cup Crushed Cheez-its",
      "Cayenne",
      "Nutmeg",
      "Salt + Pepper",
    ],
    steps: [
      "Preheat Oven to 375F.",
      "Melt butter and coat a baking dish.",
      "Blend cottage cheese, milk, mustard, cayenne, nutmeg, and salt/pepper together.",
      "Leave 1/4 cup cheddar aside. Combine the rest with the blended mix and uncooked pasta in a large bowl.",
      "Pour into dish, cover with foil and bake for 30 minutes.",
      "Uncover dish, sprinkle with remaining cheddar and cheez-its.",
      "Bake for additional 30 minutes, or until browned.",
      "Will come out very hot. Let sit for at least 15 minutes before serving.",
    ],
  },
  {
    title: "Garlic Noodles",
    description: "Oodles of Noodles.",
    img: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ingredients: [
      "1 lb refrigerated lo mein noodles",
      "2 tablespoon unsalted butter",
      "12-15 cloves garlic minced",
      "2 teaspoon oyster sauce",
      "2 teaspoon soy sauce",
      "2 teaspoon fish sauce",
      "1 teaspoon white granulated sugar",
      "1½ tablespoon grated Parmesan cheese",
      "1-2 green onion sliced and chopped",
      "Salt and pepper to taste",
    ],
    steps: [
      "In a small bowl, whisk together oyster sauce, soy sauce, fish sauce, and sugar. Set aside.",
      "Bring a large pot of salted water to a boil. Have it boiling and ready while you continue cooking.",
      "In a large skillet or wok, melt butter over medium heat. Add garlic and cook for 1 minute until fragrant, stirring often. Make sure to not brown the garlic, you just want it lightly cooked.",
      "Drop the noodles into the boiling water. Lightly agitate the noodles to separate them but don't overwork and break them. Boil for 30 seconds maximum, then use tongs to quickly transfer the noodles to the garlic butter.",
      "Give the sauce in the bowl a whisk and pour onto the noodles, making sure to get all the sugar. Lightly season the noodles with salt and pepper, then toss and stir to evenly coat the noodles in the sauce.",
      "Turn off the heat. Add the Parmesan cheese and green onion. Toss to combine and season to taste.",
    ],
  },
];

export type fatRecipe = {
  title: string;
  description: string;
  img: string;
  ingredients: string[];
  steps: string[];
};

export const chickenShallots: fatRecipe = {
  title: "Chicken Shallots",
  description: "Creamy and Wine-ey?",
  img: "https://images.unsplash.com/photo-1577194509876-4bb24787a641?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ingredients: [
    "8 Chicken Thighs",
    "2 tbsp flour",
    "2 tbsp butter",
    "12 peeled shallots",
    "2 cups white wine",
    "2 tbsp dijon mustard",
    "2 tsp thyme",
    "2 Cups halved cherry/grape tomatoes",
    "Salt/Pepper",
  ],
  steps: [
    "Pat chicken thighs dry.",
    "Sprinkle with flour, salt, pepper.",
    "Melt butter in a large skillet. Medium-high heat.",
    "Cook chicken until browned. Remove from skillet.",
    "Add shallots, saute in the chicken fat. 10 minutes.",
    "Add wine, mustard, thyme, tomatoes, and chicken thighs. Set to a low simmer for 30 minutes.",
    "Remove heat and lid, allow sauce to thicken for 15 minutes.",
  ],
};

export const honeyMustardChickenThighs: fatRecipe = {
  title: "Honey Mustard Chicken Thighs",
  description: "Tangy Sweet Perfection.",
  img: "./honeymustardchicken.jpg",
  ingredients: [
    "1/4 Cup Honey",
    "1/4 Cup Dijon Mustard",
    "2 Garlic Cloves (1/4 tsp Garlic Powder)",
    "1 tbsp Olive Oil",
    "3/2 tsp Rosemary",
    "3/2 tsp Thyme",
    "1/2 tsp Salt",
    "1/4 tsp Pepper",
    "Chicken Thighs (amount not specified)",
  ],
  steps: [
    "Preheat Oven to 350F.",
    "Place thighs in baking dish and pat dry.",
    "Mix sauce ingredients well, should be a syrupy consistency.",
    "Baste chicken liberally, pour the rest in the dish.",
    "Bake for 45-60 minutes.",
    "Check temperature periodically and take out when internal temp reaches 165F.",
  ],
};

export const braisedShortRibs: fatRecipe = {
  title: "Braised Short Ribs",
  description: "Umami to the Max.",
  img: "https://images.unsplash.com/photo-1625604086988-6e41981275fa?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ingredients: [
    "5lbs of Short Ribs, cut into 20 pieces",
    "1 Cup Soy Sauce",
    "1/4 Cup Rice Wine Vinegar",
    "3 Cloves Garlic (3/8 tsp Garlic Powder)",
    "1/4 Cup Chopped Cilantro",
    "1 tbsp Minced Ginger",
    "1/2 Cup Brown Sugar",
    "1/2 Cup Chopped Scallions (Keep Bottoms)",
    "3/4 tsp Red Pepper Flakes",
    "1/4 Cup Orange Juice",
    "1/4 Cup Teriyaki Sauce",
    "2 tbsp Lime Juice",
    "2 tbsp Lemon Juice",
  ],
  steps: [
    "Preheat Oven to 350F.",
    "Combine ribs, soy sauce, vinegar, garlic, ginger, brown sugar, green onion bottoms, red pepper flakes, cilantro, lime juice and 2 tbsp of orange juice in a large stockpot.",
    "Add 4+ cups of water to the mix. Keep adding until the ribs are submerged.",
    "Bake covered for 3 hours.",
    "Increase Oven to 425F.",
    "Add Teriyaki Sauce, Lemon Juice, and the remaining Orange Juice.",
    "Put back into oven and bake for 10 minutes until the ribs are properly glazed.",
    "Garnish with remaining chopped green onions if desired.",
  ],
};

export type proteinRecipe = {
  title: string;
  description: string;
  img: string;
  ingredients: string[];
  steps: string[];
};

export const pankoTilapia: proteinRecipe = {
  title: "Panko Tilapia",
  description: "Great for Fish Tacos!",
  img: "https://images.unsplash.com/photo-1583815950467-e7b26a5b56b3?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ingredients: [
    "2 lbs Tilapia Fillet (Cod works too)",
    "3 Cups Panko Breadcrumbs",
    "2 tbsp Olive Oil",
    "2 Eggs",
    "1 tbsp Streumi",
    "1 tsp Salt",
    "1/2 tsp Pepper",
  ],
  steps: [
    "Toss Panko, Streumi, Salt & Pepper in a bowl.",
    "Beat eggs in separate bowl until yolk & egg whites are properly combined.",
    "Heat up skillet & coat with olive oil.",
    "Dip tilapia in egg mix and coat in breadcrumb mix, let simmer in pan.",
    "Sear until sides are golden brown.",
  ],
};

export const skirtSteak: proteinRecipe = {
  title: "Skirt Steak",
  description: "Panasian Style.",
  img: "https://images.unsplash.com/photo-1619719015339-133a130520f6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ingredients: [
    "2lbs Skirt Steak",
    "1/2 Cup Olive Oil",
    "1/3 Cup Soy Sauce",
    "4 Scallions, halved",
    "2 cloves garlic (1/4 tsp Garlic Powder)",
    "1/4 Cup Lime Juice",
    "1/2 tsp red pepper flakes",
    "1/2 tsp ground cumin",
    "3 tbsp brown sugar",
  ],
  steps: [
    "Blend oil, soy sauce, scallions, garlic, lime juice, red pepper, cumin, and sugar.",
    "Pour marinade into plastic bag with steak. Marinate for 1 hour in fridge.",
    "Pat steak dry. Line pan with olive oil and sear each side.",
    "Remove steak when internal temperature hits 130F.",
    "Transfer to cutting board and slice across the grain.",
  ],
};

export const thaiCurryMussels: proteinRecipe = {
  title: "Thai Curry Mussels",
  description: "Tiny Protein Bombs.",
  img: "https://images.unsplash.com/photo-1515681778128-ed5f11c50b77?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ingredients: [
    "2.5 lbs Mussels",
    "2 tbsp Peanut Oil",
    "1 stalk of Crushed Lemongrass (or Paste)",
    "3 tbsp Thai Red Curry Paste",
    "1/2 Cup White Wine",
    "1 can of Coconut Milk",
    "2 tbsp Fish Sauce",
    "2 tbsp Lime Juice",
    "2 tbsp Chopped Cilantro",
    "4 tbsp Basil",
  ],
  steps: [
    "Add lemongrass, curry paste, wine, coconut milk, fish sauce, and lime juice to a large stockpot.",
    "Pour in Mussels and cover.",
    "Cook for 10 minutes, add cilantro and basil in last minute of cooking.",
    "Let sit for 5 minutes and serve.",
  ],
};

export type HomeItem = {
  id: number;
  title: string;
  type: string;
  text: string;
  author: string;
  authorAvatar: string;
  image: string;
};

export const homeItems: HomeItem[] = [
  {
    id: 1,
    title: 'Exploring Maui',
    type: 'Blog',
    text: 'We just got back from a trip to Maui, and we had a great time...',
    author: 'Max Lynch',
    authorAvatar: '/img/max.jpg',
    image: '/img/c1.avif',
  },
  {
    id: 2,
    title: 'Arctic Adventures',
    type: 'Blog',
    text: 'Last month we took a trek to the Arctic Circle. The isolation was just what we needed after...',
    author: 'Nathan Chapman',
    authorAvatar: '/img/nathan.jpg',
    image: '/img/c2.avif',
  },
  {
    id: 3,
    title: 'Frolicking in the Faroe Islands',
    type: 'Blog',
    text: 'The Faroe Islands are a North Atlantic archipelago located 320 kilometres (200 mi) north-northwest of Scotland...',
    author: 'Leo Giovanetti',
    authorAvatar: '/img/leo.jpg',
    image: '/img/c3.avif',
  },
];

export type NotificationItem = {
  id: number;
  title: string;
  when: string;
};

export const notifications: NotificationItem[] = [
  { id: 1, title: 'New friend request', when: '6 hr' },
  { id: 2, title: 'Please change your password', when: '1 day' },
  { id: 3, title: 'You have a new message', when: '2 weeks' },
  { id: 4, title: 'Welcome to the app!', when: '1 month' },
];

export type ListItem = {
  name: string;
  done?: boolean;
};

export type TodoListItem = {
  name: string;
  id: string;
  items?: ListItem[];
};

// Some fake lists
export const lists: TodoListItem[] = [
  {
    name: 'Groceries',
    id: '01HRCYTYED31N83MJ0WK97WC02',
    items: [
      { name: 'Apples' },
      { name: 'Bananas' },
      { name: 'Milk' },
      { name: 'Ice Cream' },
    ],
  },
  {
    name: 'Hardware Store',
    id: '01HRCYV2KPNJQJ43Y7X526BHVX',
    items: [
      { name: 'Circular Saw' },
      { name: 'Tack Cloth' },
      { name: 'Drywall' },
      { name: 'Router' },
    ],
  },
  {
    name: 'Work',
    id: '01HRCYV6C3YWAJRF2ZE7AZ17K7',
    items: [{ name: 'TPS Report' }, { name: 'Set up email' }],
  },
  {
    name: 'Reminders',
    id: '01HRCYVADRPCM5SYV5BH98C7HS',
    items: [{ name: 'Get car inspection', done: true }],
  },
];

export type Settings = {
  enableNotifications: boolean;
};

export const settings: Settings = {
  enableNotifications: true,
};
