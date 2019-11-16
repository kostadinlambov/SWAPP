import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoginForm from './../components/LoginForm';
import {Loading} from '../../../components/Loading';

const LOGIN_USER = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      token
    }
  }
`;

export default function Login() {
  const client = useApolloClient();
  const [signIn, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ signIn }) {
      localStorage.setItem('token', signIn.token);
      client.writeData({ data: { isLoggedIn: true } });
    },
  });

  if (loading) return <Loading spinnerSize={'15rem'} marginTop={'5rem'}/>;
  if (error) {
    debugger;
    let errorMessage = error.message;
  
    if(errorMessage.startsWith('GraphQL error:')){
      errorMessage = errorMessage.split(':')[1].trim();
    }
  
    return <LoginForm login={signIn} errorMessage={errorMessage}/>;
  } 

  return <LoginForm login={signIn}  errorMessage={''}/>;
}
