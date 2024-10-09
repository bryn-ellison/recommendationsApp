import { QueryClient, useQueryClient } from "@tanstack/react-query";
import { useMemo } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { AppRoot } from "./routes/app/root";

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
      path: "/app",
      element: <AppRoot />,
      children: [
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
