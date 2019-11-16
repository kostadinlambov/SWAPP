import React from 'react';
import styled from 'styled-components';
import { useApolloClient } from '@apollo/react-hooks';

export default function LogoutButton() {
  const client = useApolloClient();

  const onLogoutHandler = () => {
    const localStorageTheme = JSON.parse(localStorage.getItem('theme'));
    localStorage.clear();
    client.cache.reset();
    client.writeData({ data: { isLoggedIn: false } });
    localStorage.setItem('theme', JSON.stringify(localStorageTheme))
  };

  return (
    <StyledButton onClick={onLogoutHandler}>
      <i className="fa fa-sign-out"></i>
    </StyledButton>
  );
}

// Styled Components
const StyledButton = styled.button`
  padding: 0.1rem 0.5rem;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 1.2rem;
  background-color: ${props => props.theme.outlinedButton.backgroundColor};
  border-color: ${props => props.theme.outlinedButton.borderColor};
  color: ${props => props.theme.outlinedButton.color};
`;
