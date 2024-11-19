import { ContentLayout } from "@/components/layouts/content-layout";
import { Spinner } from "@/components/ui/spinner";
//import { UpdateProfile } from '@/features/users/components/update-profile';
import { useUser } from "@/lib/auth";

type EntryProps = {
  label: string;
  value: string;
};
const Entry = ({ label, value }: EntryProps) => (
  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
    <dt className="text-sm font-medium text-foreground">{label}</dt>
    <dd className="mt-1 text-sm text-muted-foreground sm:col-span-2 sm:mt-0">
      {value}
    </dd>
  </div>
);

export const ProfileRoute = () => {
  const userQuery = useUser();

  if (userQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="large" />
      </div>
    );
  }

  const user = userQuery!.data;

  if (!user) return null;

  return (
    <ContentLayout title="Profile">
      <div className="overflow-hidden bg-background shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <div className="flex justify-between">
            <h3 className="text-lg font-medium leading-6 text-foreground">
              User Information
            </h3>
            {/* <UpdateProfile /> */}
          </div>
          <p className="mt-1 max-w-2xl text-sm text-foreground">
            Personal details of the user.
          </p>
        </div>
        <div className="border-t border-accent px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-accent">
            <Entry label="First Name" value={user.firstName} />
            <Entry label="Last Name" value={user.lastName} />
            <Entry label="User Name" value={user.userName} />
            <Entry label="Location" value="" />
            <Entry label="Email Address" value={user.email} />
            <Entry label="Role" value={user.role} />
            <Entry label="Bio" value="" />
          </dl>
        </div>
      </div>
    </ContentLayout>
  );
};
