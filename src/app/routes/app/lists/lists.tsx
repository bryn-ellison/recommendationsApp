import { ContentLayout } from "@/components/layouts/content-layout";
import { brynEllison } from "@/testing/mockData/users";
import { ListsList } from "@/features/lists/components/lists-list";

export const ListsRoute = () => {
  const user = brynEllison;
  return (
    <ContentLayout title="Your Lists">
      <h1 className="text-xl">{user.userName}'s lists</h1>
      <ListsList />
    </ContentLayout>
  );
};
