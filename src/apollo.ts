import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client/core';

// HTTP connection to the API
const { VITE_API_BASE } = import.meta.env;
const httpLink = createHttpLink({
  uri: typeof VITE_API_BASE === 'string' ? VITE_API_BASE : '',
});

const cache = new InMemoryCache({});
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export default apolloClient;
