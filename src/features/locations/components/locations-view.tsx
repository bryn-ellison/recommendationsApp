import { Location } from "@/types/api";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from "react-router-dom";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardImage,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Search } from "lucide-react";

import { eastLondon, centralLondon } from "@/testing/mockData/users";

export const LocationsView = () => {
  const locations: Array<Location> = [eastLondon, centralLondon];
  const navigate = useNavigate();

  return (
    <>
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="search" placeholder="Search locations" />
        <Button type="submit">
          <Search />
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {locations.map((location) => (
          <Card
            key={location.id}
            className="hover:bg-muted"
            onClick={() => navigate(`/app/locations/${location.id}`)}
          >
            <AspectRatio ratio={16 / 9}>
              <CardImage
                src={location.image}
                alt={location.name}
                className="h-full w-full rounded-t-md object-cover"
              />
            </AspectRatio>
            <CardHeader>
              <CardTitle>{location.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{location.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};
