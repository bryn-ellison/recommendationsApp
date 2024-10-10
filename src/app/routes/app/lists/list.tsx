//import { ContentLayout } from "@/components/layouts/content-layout";
import { useParams } from "react-router-dom";

import { ListView } from "@/features/lists/components/list-view";

export const ListRoute = () => {
  const params = useParams();
  const listId = params.listId as string;

  return <ListView listId={listId} />;
};
