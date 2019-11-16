import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token')
    ? 'Bearer ' + localStorage.getItem('token')
    : '';
  return {
    headers: {
      ...headers,
      Authorization: token,
    },
  };
});

export default authLink;
