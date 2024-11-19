import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { useUsers } from "../api/get-users";
import { ApiUser } from "@/types/api";

//import { DeleteUser } from "./delete-user";

export const UsersList = () => {
  const usersQuery = useUsers();
  if (usersQuery.isLoading) {
    return (
      <div className="flex h-48 w-full items-center justify-center">
        <Spinner size="large" />
      </div>
    );
  }

  const users = usersQuery.data;

  if (!users) return null;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User Id</TableHead>
          <TableHead>Username</TableHead>
          <TableHead>User Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user: ApiUser, i: number) => (
          <TableRow key={i}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.role}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
