import { List, LocationListing } from "@/types/api";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardImage,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { replace, useNavigate } from "react-router-dom";

import {
  barsOfEastLondon,
  restaurantsOfEastLondon,
  prettyThings,
} from "@/testing/mockData/lists-mock-data";

import { listings } from "@/testing/mockData/listings-mock-data";

import { ContentLayout } from "@/components/layouts/content-layout";
import { Badge } from "@/components/ui/badge";

export const ListView = ({ listId }: { listId: string }) => {
  const listData: Array<List> = [
    barsOfEastLondon,
    restaurantsOfEastLondon,
    prettyThings,
  ];

  const list: List = listData.filter((list) => list.id === listId)[0];
  const listingsData: Array<LocationListing> = listings.filter((listing) =>
    list.listings.includes(listing.id)
  );
  const navigate = useNavigate();
  return (
    <ContentLayout title={list.title}>
      <h2>{list.description}</h2>
      <div className="grid grid-cols-1 gap-4 mt-4">
        {listingsData.map((listing) => (
          <Card key={listing.id} className="">
            <AspectRatio ratio={16 / 9}>
              <CardImage
                src={listing.image}
                alt={listing.name}
                className="h-full w-full rounded-t-md object-cover"
              />
            </AspectRatio>
            <CardHeader>
              <CardTitle
                onClick={() => navigate(`/app/listings/${listing.id}`)}
                className="hover:underline cursor-pointer"
              >
                {listing.name}
              </CardTitle>
              <CardDescription className="font-bold">
                {listing.address}
              </CardDescription>
              <Badge
                variant={"secondary"}
                onClick={() =>
                  navigate(`/app/locations/${listing.location.id}`)
                }
                className="cursor-pointer"
              >
                {listing.location.name}
              </Badge>
            </CardHeader>
            <CardContent>
              <CardDescription>{listing.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </ContentLayout>
  );
};
