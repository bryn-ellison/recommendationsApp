import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  ScrollRestoration,
} from "react-router-dom";

import { AppRoot } from "./routes/app/root";
import { ProtectedRoute } from "@/lib/auth";

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      path: "/",
      lazy: async () => {
        const { LandingRoute } = await import("./routes/landing");
        return { Component: LandingRoute };
      },
    },
    {
      path: "/auth/register",
      lazy: async () => {
        const { RegisterRoute } = await import("./routes/auth/register");
        return { Component: RegisterRoute };
      },
    },
    {
      path: "/auth/login",
      lazy: async () => {
        const { LoginRoute } = await import("./routes/auth/login");
        return { Component: LoginRoute };
      },
    },
    {
      path: "/app",
      element: <ProtectedRoute>
                 <AppRoot />
               </ProtectedRoute>,
      children: [
        {
          path: "lists",
          lazy: async () => {
            const { ListsRoute } = await import("./routes/app/lists/lists");
            return { Component: ListsRoute };
          },
          // loader: async (args: LoaderFunctionArgs) => {
          //   const { discussionsLoader } = await import(
          //     "./routes/app/discussions/discussions"
          //   );
          //   return discussionsLoader(queryClient)(args);
          // },
        },
        {
          path: "lists/:listId",
          lazy: async () => {
            const { ListRoute } = await import("./routes/app/lists/list");
            return { Component: ListRoute };
          },
        },
        {
          path: "listings/:listingId",
          lazy: async () => {
            const { ListingRoute } = await import(
              "./routes/app/listings/listing"
            );
            return { Component: ListingRoute };
          },
        },
        {
          path: "locations",
          lazy: async () => {
            const { LocationsRoute } = await import(
              "./routes/app/locations/locations"
            );
            return { Component: LocationsRoute };
          },
        },
        {
          path: "locations/:locationId",
          lazy: async () => {
            const { LocationRoute } = await import(
              "./routes/app/locations/location"
            );
            return { Component: LocationRoute };
          },
        },
        {
          path: "users",
          lazy: async () => {
            const { UsersRoute } = await import("./routes/app/users");
            return { Component: UsersRoute };
          },

          loader: async () => {
            const { usersLoader } = await import("./routes/app/users");
            return usersLoader()();
          },
        },
        {
          path: "profile",
          lazy: async () => {
            const { ProfileRoute } = await import("./routes/app/profile");
            return { Component: ProfileRoute };
          },
        },
        {
          path: "",
          lazy: async () => {
            const { DashboardRoute } = await import("./routes/app/dashboard");
            return { Component: DashboardRoute };
          },
        },
      ],
    },

    {
      path: "*",
      lazy: async () => {
        const { NotFoundRoute } = await import("./routes/not-found");
        return { Component: NotFoundRoute };
      },
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();

  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);

  return <RouterProvider router={router} />;
};
