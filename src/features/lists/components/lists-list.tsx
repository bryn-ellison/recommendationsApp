import { List } from "@/types/api";
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

import {
  barsOfEastLondon,
  restaurantsOfEastLondon,
  prettyThings,
} from "@/testing/mockData/lists-mock-data";

export const ListsList = () => {
  const lists: Array<List> = [
    barsOfEastLondon,
    restaurantsOfEastLondon,
    prettyThings,
  ];
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {lists.map((list) => (
        <Card
          key={list.id}
          className="hover:bg-muted"
          onClick={() => navigate(`/app/lists/${list.id}`)}
        >
          <AspectRatio ratio={16 / 9}>
            <CardImage
              src={list.image}
              alt={list.title}
              className="h-full w-full rounded-t-md object-cover"
            />
          </AspectRatio>
          <CardHeader>
            <CardTitle>{list.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{list.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
