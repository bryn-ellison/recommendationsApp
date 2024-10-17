import { Location } from "@/types/api";
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
import { Separator } from "@/components/ui/separator";

import { eastLondon, centralLondon } from "@/testing/mockData/users";

import { ContentLayout } from "@/components/layouts/content-layout";
import { ListsList } from "@/features/lists/components/lists-list";

export const LocationView = ({ locationId }: { locationId: string }) => {
  const locations: Array<Location> = [eastLondon, centralLondon];
  const locationData: Location = locations.filter(
    (location) => location.id === locationId
  )[0];
  return (
    <ContentLayout title={locationData.name}>
      <AspectRatio ratio={16 / 9}>
        <img src={locationData.image} className="h-full w-full object-cover" />
      </AspectRatio>
      <div className="mt-4">
        <p>{locationData.description}</p>
      </div>
      <Separator orientation="horizontal" className="mt-6 mb-6" />
      <h2 className="text-2xl font-semibold leading-none tracking-tight">
        Lists in {locationData.name}
      </h2>
      <ListsList />
    </ContentLayout>
  );
};
