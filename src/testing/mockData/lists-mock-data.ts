import { List } from "@/types/api";

export const barsOfEastLondon: List = {
  id: "001",
  createdAt: Date.now(),
  title: "The Bars of East London",
  author: "001",
  listType: "LOCATIONS",
  description:
    "Take a tour of the finest watering holes in the East of London.",
  image:
    "https://www.hot-dinners.com/images/stories/features/2024/winebars/eastlondon/dans.jpg",
  listings: ["001", "002", "003"],
};

export const restaurantsOfEastLondon: List = {
  id: "002",
  createdAt: Date.now(),
  title: "The Restaurants of East London",
  author: "001",
  listType: "LOCATIONS",
  description: "The best dining in the east of the capital.",
  image:
    "https://media.cntravellerme.com/photos/65b7c46adcc03279334c1a57/16:9/w_2240,c_limit/Screenshot%202024-01-29%20at%207.29.38%20PM.png",
  listings: ["004", "005", "006"],
};

export const prettyThings: List = {
  id: "003",
  createdAt: Date.now(),
  title: "Pretty Things for Kitchens",
  author: "001",
  listType: "PRODUCTS",
  description: "A selection of the prettiest and most useful kitchen items.",
  image:
    "https://sellvia.com/wp-content/uploads/webp/2022/10/find-your-niche_jpg.webp",
  listings: ["007", "008", "009"],
};
