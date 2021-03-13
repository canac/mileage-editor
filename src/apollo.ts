import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';
import { getEnvVar } from './env';

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: getEnvVar('VITE_API_BASE'),
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        journeyMany: {
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
  link: httpLink,
  cache,
});

export default apolloClient;
