import { LocationListing, ProductListing } from "@/types/api";

const dansBar: LocationListing = {
  id: "001",
  createdAt: Date.now(),
  name: "Dan's Bar",
  description:
    "Wine merchant Dan Long of Natty Boy Wines is the man behind this Dalston wine bar (although the bar is actually named after Australian booze merchant Dan Murphy's). Not only does he offer plenty of options by the glass, but here you can try any of the 600+ wines on his natural wine-focused list with a corkage fee. There's tinned fish, charcuterie and other bites to go with your glass of wine, but do check out the Aussie snack selection to buy on your way out.",
  address: "Dalston - 2-4 Tottenham Rd, London N1 4BZ",
  location: "001",
  image:
    "https://www.hot-dinners.com/images/stories/features/2024/winebars/eastlondon/dans.jpg",
};

const oneohsevenBar: LocationListing = {
  id: "002",
  createdAt: Date.now(),
  name: "107 Bar & Wine Shop",
  description:
    "The natural wine bar formerly known as P Franco is now in the hands of its former manager, William Gee and if anything it’s even more popular than it was before. The action here is all on the central table, although you might find an alcove among the wine shelves to perch with your glass. The list focuses on artisanal growers who practice low-intervention and is, in the main, European-focused. At the end of the bar is the miniscule kitchen from which great things emerge - keep an eye on their Insta account to see who’s in residence at any given point.",
  address: "Clapton - 107 Lower Clapton Rd, London E5 0NP",
  location: "001",
  image:
    "https://www.hot-dinners.com/images/stories/features/2024/winebars/eastlondon/107.jpg",
};

const sagerAndWilde: LocationListing = {
  id: "003",
  createdAt: Date.now(),
  name: "Sager + Wilde",
  description:
    "The natural wine bar formerly known as P Franco is now in the hands of its former manager, William Gee and if anything it’s even more popular than it was before. The action here is all on the central table, although you might find an alcove among the wine shelves to perch with your glass. The list focuses on artisanal growers who practice low-intervention and is, in the main, European-focused. At the end of the bar is the miniscule kitchen from which great things emerge - keep an eye on their Insta account to see who’s in residence at any given point.",
  address: "Hackney - 129 Hackney Road, London E2 8J",
  location: "001",
  image:
    "https://www.hot-dinners.com/images/stories/features/2021/winebars/sagerwilde.jpg",
};

export const listings = [dansBar, oneohsevenBar, sagerAndWilde];

//   export type ProductListing = Entity<{
//     name: string;
//     description: string;
//     price: string;
//     productUrl: string;
//     image: string;
//   }>;
