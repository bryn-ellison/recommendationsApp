import { useParams } from "react-router-dom";
import { LocationView } from "@/features/locations/components/location-view";

export const LocationRoute = () => {
  const params = useParams();
  const locationId = params.locationId as string;

  return <LocationView locationId={locationId} />;
};
