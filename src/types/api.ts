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
}>;

export type List = Entity<{
  title: string;
  author: string;
  description: string;
  image: string;
  listType: "LOCATIONS" | "PRODUCTS";
  listings: Array<String>;
}>;

export type LocationListing = Entity<{
  name: string;
  description: string;
  address: string;
  location: string;
  image: string;
}>;

export type ProductListing = Entity<{
  name: string;
  description: string;
  price: string;
  productUrl: string;
  image: string;
}>;
