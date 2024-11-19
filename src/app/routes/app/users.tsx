import { ContentLayout } from "@/components/layouts/content-layout";
import { UsersList } from "@/features/users/components/users-list";

export const usersLoader = () => async () => {
  return {};
};

export const UsersRoute = () => {
  return (
    <ContentLayout title="Users">
      <UsersList />
    </ContentLayout>
  );
};
