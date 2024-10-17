import { LocationListing, ProductListing } from "@/types/api";

const dansBar: LocationListing = {
  id: "001",
  createdAt: Date.now(),
  name: "Dan's Bar",
  listingTypes: ["BAR"],
  tags: [
    {
      id: "001",
      createdAt: Date.now(),
      listingTypes: ["BAR", "PUB", "RESTAURANT"],
      tagTitle: "Cosy",
    },
    {
      id: "002",
      createdAt: Date.now(),
      listingTypes: ["BAR", "RESTAURANT"],
      tagTitle: "Natural Wine",
    },
  ],
  description:
    "Wine merchant Dan Long of Natty Boy Wines is the man behind this Dalston wine bar (although the bar is actually named after Australian booze merchant Dan Murphy's). Not only does he offer plenty of options by the glass, but here you can try any of the 600+ wines on his natural wine-focused list with a corkage fee. There's tinned fish, charcuterie and other bites to go with your glass of wine, but do check out the Aussie snack selection to buy on your way out.",
  address: "Dalston - 2-4 Tottenham Rd, London N1 4BZ",
  location: {
    id: "001",
    createdAt: Date.now(),
    name: "East London",
    coordinates: "51.5563° N, 0.0655° E",
    image:
      "https://www.getliving.com/wp-content/uploads/2022/04/Hackney-Canal-Graffiti.png",
    description:
      "East London is the northeastern part of London, England, east of the ancient City of London and north of the River Thames as it begins to widen. Containing areas in the historic counties of Middlesex and Essex, East London developed as London's docklands and the primary industrial centre.",
  },
  image:
    "https://www.hot-dinners.com/images/stories/features/2024/winebars/eastlondon/dans.jpg",
};

const oneohsevenBar: LocationListing = {
  id: "002",
  createdAt: Date.now(),
  name: "107 Bar & Wine Shop",
  listingTypes: ["BAR"],
  tags: [
    {
      id: "001",
      createdAt: Date.now(),
      listingTypes: ["BAR", "PUB", "RESTAURANT"],
      tagTitle: "Cosy",
    },
    {
      id: "002",
      createdAt: Date.now(),
      listingTypes: ["BAR", "RESTAURANT"],
      tagTitle: "Natural Wine",
    },
  ],
  description:
    "The natural wine bar formerly known as P Franco is now in the hands of its former manager, William Gee and if anything it’s even more popular than it was before. The action here is all on the central table, although you might find an alcove among the wine shelves to perch with your glass. The list focuses on artisanal growers who practice low-intervention and is, in the main, European-focused. At the end of the bar is the miniscule kitchen from which great things emerge - keep an eye on their Insta account to see who’s in residence at any given point.",
  address: "Clapton - 107 Lower Clapton Rd, London E5 0NP",
  location: {
    id: "001",
    createdAt: Date.now(),
    name: "East London",
    coordinates: "51.5563° N, 0.0655° E",
    image:
      "https://www.getliving.com/wp-content/uploads/2022/04/Hackney-Canal-Graffiti.png",
    description:
      "East London is the northeastern part of London, England, east of the ancient City of London and north of the River Thames as it begins to widen. Containing areas in the historic counties of Middlesex and Essex, East London developed as London's docklands and the primary industrial centre.",
  },
  image:
    "https://www.hot-dinners.com/images/stories/features/2024/winebars/eastlondon/107.jpg",
};

const sagerAndWilde: LocationListing = {
  id: "003",
  createdAt: Date.now(),
  name: "Sager + Wilde",
  listingTypes: ["BAR"],
  tags: [
    {
      id: "002",
      createdAt: Date.now(),
      listingTypes: ["BAR", "RESTAURANT"],
      tagTitle: "Natural Wine",
    },
  ],
  description:
    "First launched in the dark ages of wine bars (back in 2013), Sager & Wilde found fame serving rare wines, all by the glass, for insanely low mark-ups. Unsurprisingly the idea struck a chord and a cult wine bar was born. Their format and approach has changed slightly since those heady days, but this doesn't make Sager & Wilde any less appealing. The formula is simple - an ever-changing selection of ‘benchmark’ wines from leading producers, served in impressive glassware, in unpretentious surroundings. They do a nice line in cheese and charcuterie to go alongside the wines, as well as offering a cheese toastie selection.",
  address: "Hackney - 129 Hackney Road, London E2 8J",
  location: {
    id: "001",
    createdAt: Date.now(),
    name: "East London",
    coordinates: "51.5563° N, 0.0655° E",
    image:
      "https://www.getliving.com/wp-content/uploads/2022/04/Hackney-Canal-Graffiti.png",
    description:
      "East London is the northeastern part of London, England, east of the ancient City of London and north of the River Thames as it begins to widen. Containing areas in the historic counties of Middlesex and Essex, East London developed as London's docklands and the primary industrial centre.",
  },
  image:
    "https://www.hot-dinners.com/images/stories/features/2021/winebars/sagerwilde.jpg",
};

const theMarksman: LocationListing = {
  id: "004",
  createdAt: Date.now(),
  name: "The Marksman",
  listingTypes: ["BAR", "RESTAURANT"],
  tags: [
    {
      id: "001",
      createdAt: Date.now(),
      listingTypes: ["BAR", "PUB", "RESTAURANT"],
      tagTitle: "Cosy",
    },
  ],
  description:
    "This is a revamped pub from two St John veterans, Tom Harris and Jon Rotheram is both one of Hackney's best pub and best restaurants. Downstairs in the pub, make sure to get one of their excellent beef and barley buns, while upstairs it's an actual crime to leave without trying their brown butter & honey tart, one of London's best desserts. Their Sunday roasts are exceptional too.",
  address: "254 Hackney Road, London, E2 7SJ",
  location: {
    id: "001",
    createdAt: Date.now(),
    name: "East London",
    coordinates: "51.5563° N, 0.0655° E",
    image:
      "https://www.getliving.com/wp-content/uploads/2022/04/Hackney-Canal-Graffiti.png",
    description:
      "East London is the northeastern part of London, England, east of the ancient City of London and north of the River Thames as it begins to widen. Containing areas in the historic counties of Middlesex and Essex, East London developed as London's docklands and the primary industrial centre.",
  },
  image:
    "https://www.hot-dinners.com/media/reviews/photos/thumbnail/1000x667c/11/db/a0/marksman-80-1436023046.jpg",
};

const leos: LocationListing = {
  id: "005",
  createdAt: Date.now(),
  name: "Leo's",
  listingTypes: ["BAR", "RESTAURANT"],
  tags: [
    {
      id: "001",
      createdAt: Date.now(),
      listingTypes: ["BAR", "PUB", "RESTAURANT"],
      tagTitle: "Cosy",
    },
    {
      id: "002",
      createdAt: Date.now(),
      listingTypes: ["RESTAURANT"],
      tagTitle: "Italian",
    },
  ],
  description:
    "Leo's comes from the people behind Juliet's Quality Food in Tooting and this Clapton restaurant has them collaborating with ex-Bright chef Giuseppe Belvedere. An all-day bar and restaurant, it serves up a regularly changing menu that draws on Giuseppe’s Sardinian heritage, using the best possible produce from the British Isles and the continent.",
  address: "59 Chatsworth Rd, Lower Clapton, London E5 0LH",
  location: {
    id: "001",
    createdAt: Date.now(),
    name: "East London",
    coordinates: "51.5563° N, 0.0655° E",
    image:
      "https://www.getliving.com/wp-content/uploads/2022/04/Hackney-Canal-Graffiti.png",
    description:
      "East London is the northeastern part of London, England, east of the ancient City of London and north of the River Thames as it begins to widen. Containing areas in the historic counties of Middlesex and Essex, East London developed as London's docklands and the primary industrial centre.",
  },
  image:
    "https://www.hot-dinners.com/media/reviews/photos/thumbnail/1000x667c/64/fa/67/leos-clapton-london-restaurant-45-1688308070.jpg",
};

export const listings = [
  dansBar,
  oneohsevenBar,
  sagerAndWilde,
  theMarksman,
  leos,
];

//   export type ProductListing = Entity<{
//     name: string;
//     description: string;
//     price: string;
//     productUrl: string;
//     image: string;
//   }>;
