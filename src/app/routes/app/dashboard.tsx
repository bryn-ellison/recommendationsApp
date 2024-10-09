import { ContentLayout } from "@/components/layouts/content-layout";
import { brynEllison } from "@/testing/mockData/users";

export const DashboardRoute = () => {
  const user = brynEllison;

  return (
    <ContentLayout title="Dashboard">
      <h1 className="text-xl">Hello, {user.firstName}</h1>
      <h4 className="my-3">Hope you're having a nice day.</h4>
      <p className="font-medium">In this application you can:</p>

      <ul className="my-4 list-inside list-disc">
        <li>Create listings</li>
        <li>Edit listings</li>
        <li>Delete listings</li>
        <li>Create lists</li>
        <li>Search and view other users lists</li>
      </ul>
    </ContentLayout>
  );
};
