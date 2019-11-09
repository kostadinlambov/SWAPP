import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { resolvers, typeDefs } from './local';

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
    headers: {
      authorization: localStorage.getItem('token'),
    },
  }),
  typeDefs,
  resolvers,
});

cache.writeData({
  data: {
    isLoggedIn: !!localStorage.getItem('token'),
  },
});

export default client;
