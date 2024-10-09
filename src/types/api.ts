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
