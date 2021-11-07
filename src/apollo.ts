import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  concat,
  createHttpLink,
  from,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { getClient } from './auth/plugin';
import { getEnvVar } from './env';

interface Context {
  token?: string;
}

const withToken = setContext(async (): Promise<Context> => {
  const authClient = await getClient();
  const token = await authClient.getTokenSilently();
  return { token };
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // Add the authorization header
  const { token } = operation.getContext() as Context;
  operation.setContext({
    headers: {
      authorization: token && `Bearer ${token}`,
    },
  });

  return forward(operation);
});

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: getEnvVar('VITE_GRAPHQL_ENDPOINT'),
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        journeyMany: {
          merge: false,
        },
        journeyTemplateMany: {
          merge: false,
        },
        favoritePlaceMany: {
          merge: false,
        },
      },
    },
  },
});
const apolloClient = new ApolloClient({
  link: from([withToken, concat(authMiddleware, httpLink)]),
  cache,
});

export default apolloClient;
