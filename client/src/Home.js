import React from 'react';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

import Pages from './pages';
import Login from './pages/login/pages/Login';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

const Home = () =>  {
  const { data } = useQuery(IS_LOGGED_IN);
  debugger;
  return data.isLoggedIn ? <Pages /> : <Login />;
}

export default Home;
