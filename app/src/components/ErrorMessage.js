import React from 'react';
import styled from 'styled-components';

// export const Loading = (props) => (<ErrorMessage />)

const ErrorMessage = styled.div`
  color: red;
  text-align: ${props => props.textAlingn || 'left'};
  position: relative;
  font-weight: 600;
  margin: ${props => props.margin || '0 0 0 0'};
  padding: ${props => props.padding || '0 0 0 0'};
`;

export default ErrorMessage;
