
import { useMemo } from 'react';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import { CONST_CONFIG } from '../constants/config';

let apolloClient: ApolloClient<any>;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: `${CONST_CONFIG.BASE_URL}graphql`,
    cache: new InMemoryCache()
  });
}

export function useApollo(initialState: any) {
  const client = useMemo(() => {
    if (!apolloClient) {
      apolloClient = createApolloClient();
    }

    if (initialState) {
      const existingCache = apolloClient.extract();
      apolloClient.cache.restore({ ...existingCache, ...initialState });
    }

    return apolloClient;
  }, [initialState]);

  return client;
}