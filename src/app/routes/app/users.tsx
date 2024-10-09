import { ContentLayout } from "@/components/layouts/content-layout";

export const usersLoader = () => async () => {
  return {};
};

export const UsersRoute = () => {
  return (
    <ContentLayout title="Users">
      <p>Users info here.</p>
    </ContentLayout>
  );
};
