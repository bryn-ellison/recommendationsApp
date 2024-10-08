import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";

import { queryConfig } from "../lib/react-query";
import { MainErrorFallback } from "../components/errors/main";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: queryConfig,
      })
  );

  return (
    <ErrorBoundary FallbackComponent={MainErrorFallback}>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
};
