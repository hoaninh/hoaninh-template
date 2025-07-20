import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { PropsWithChildren } from 'react';
const queryClient = new QueryClient();

export const QueryProvider = (props: PropsWithChildren) => {
  const {children} = props;
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
