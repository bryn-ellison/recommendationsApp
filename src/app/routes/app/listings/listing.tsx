import { useParams } from "react-router-dom";
import { ListingView } from "@/features/listings/components/listing-view";

export const ListingRoute = () => {
  const params = useParams();
  const listingId = params.listingId as string;

  return <ListingView listingId={listingId} />;
};
