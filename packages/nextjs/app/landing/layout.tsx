"use client";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

export default function Layout({ children }: { children: React.ReactNode }) {
  const subgraphUri = "https://api.studio.thegraph.com/query/87880/coinvent/version/latest";
  const client = new ApolloClient({
    uri: subgraphUri,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <main>{children}</main>
    </ApolloProvider>
  );
}
