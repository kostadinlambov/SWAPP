import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${props => props.theme.solidButton.backgroundColor};
  border-color: ${props => props.theme.solidButton.borderColor};
  color: ${props => props.theme.solidButton.color};
  padding: 0.3rem 1rem;
  font-weight: bold;
  font-size: 1.2rem;
  outline: none;
  border-radius: 5px;
  border: none;
  text-align: right;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 1000px) {
    font-size: 1rem;
  }
`;