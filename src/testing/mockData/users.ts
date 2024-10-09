import { User, Location } from "@/types/api";

export const eastLondon: Location = {
  id: "001",
  createdAt: Date.now(),
  name: "East London",
  coordinates: "51.5563° N, 0.0655° E",
  description:
    "East London is the northeastern part of London, England, east of the ancient City of London and north of the River Thames as it begins to widen. Containing areas in the historic counties of Middlesex and Essex, East London developed as London's docklands and the primary industrial centre.",
};

export const brynEllison: User = {
  id: "001",
  createdAt: Date.now(),
  firstName: "Bryn",
  lastName: "Ellison",
  userName: "BrynEllison",
  email: "bryn.ellison@outlook.com",
  role: "ADMIN",
  locations: [eastLondon],
  bio: "Bryn Ellison is the creator of this app. Bow down.",
};

export const centralLondon: Location = {
  id: "002",
  createdAt: Date.now(),
  name: "Central London",
  coordinates: "51.5074° N, 0.1272° W",
  description:
    "Central London is the middle part of London, England. It contains lots of tourists and some quite good art galleries.",
};

export const carlyFlood: User = {
  id: "002",
  createdAt: Date.now(),
  firstName: "Carly",
  lastName: "Flood",
  userName: "CarlyFlood",
  email: "carly.flood@outlook.com",
  role: "CURATOR",
  locations: [eastLondon],
  bio: "Carly Flood is an expert curator of pretty things.",
};
