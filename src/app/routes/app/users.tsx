import { ContentLayout } from "../../../components/layouts/content-layout";

export const usersLoader = () => async () => {
  return { user: "DAVE" };
};

export const UsersRoute = () => {
  return (
    <ContentLayout title="Users">
      <p>Users info here.</p>
    </ContentLayout>
  );
};
