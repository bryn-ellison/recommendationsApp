import { useParams } from "react-router-dom";
import { LocationsView } from "@/features/locations/components/locations-view";
import { ContentLayout } from "@/components/layouts/content-layout";

export const LocationsRoute = () => {
  const params = useParams();
  const locationsId = params.locationsId as string;

  return (
    <ContentLayout title="Locations">
      <LocationsView />
    </ContentLayout>
  );
};
