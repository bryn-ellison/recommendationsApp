export type BaseEntity = {
  id: string;
  createdAt: number;
};

export type Entity<T> = {
  [K in keyof T]: T[K];
} & BaseEntity;

export type User = Entity<{
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  role: "ADMIN" | "USER" | "MODERATOR" | "CURATOR";
  locations: Array<Location>;
  bio: string;
}>;

export type Location = Entity<{
  name: string;
  coordinates: string;
  description: string;
  image: string;
}>;

export type List = Entity<{
  title: string;
  author: string;
  description: string;
  image: string;
  listType: "LOCATIONS" | "PRODUCTS";
  listings: Array<String>;
}>;

export type ListItem = Entity<{
  title: string;
  description: string;
  listing: LocationListing | ProductListing;
  featuredInfo: Array<FeaturedInfo>;
  images: Array<string>;
}>;

export type FeaturedInfo = Entity<{
  heading: string;
  content: string;
}>;

export type LocationTag = Entity<{
  listingTypes: Array<LocationListingType>;
  tagTitle: string;
}>;

export type LocationListingType =
  | "BAR"
  | "PUB"
  | "CAFE"
  | "RESTAURANT"
  | "SHOP"
  | "ATTRACTION";

export type LocationListing = Entity<{
  name: string;
  listingTypes: Array<LocationListingType>;
  tags: Array<LocationTag>;
  description: string;
  address: string;
  location: Location;
  image: string;
}>;

export type ProductListing = Entity<{
  name: string;
  description: string;
  price: string;
  productUrl: string;
  image: string;
}>;
