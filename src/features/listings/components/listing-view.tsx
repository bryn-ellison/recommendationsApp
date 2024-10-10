import { LocationListing } from "@/types/api";
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

import { listings } from "@/testing/mockData/listings-mock-data";

import { ContentLayout } from "@/components/layouts/content-layout";

export const ListingView = ({ listingId }: { listingId: string }) => {
  const listingData: LocationListing = listings.filter(
    (listing) => listing.id === listingId
  )[0];
  return (
    <ContentLayout title={listingData.name}>
      <div className="grid grid-cols-1 gap-4 mt-4">
        <Card>
          <AspectRatio ratio={16 / 9}>
            <CardImage
              src={listingData.image}
              alt={listingData.name}
              className="h-full w-full rounded-t-md object-cover"
            />
          </AspectRatio>
          <CardHeader>
            <CardDescription className="font-bold">
              {listingData.address}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CardDescription>{listingData.description}</CardDescription>
          </CardContent>
        </Card>
      </div>
    </ContentLayout>
  );
};
