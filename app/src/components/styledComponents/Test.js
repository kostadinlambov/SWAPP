import React, { Component } from 'react';
import styled from 'styled-components';
import {StyledParagraph} from './StyledComponents';
import { Button } from 'reactstrap';

const StyledButton = styled.button`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  border: 1px solid #ccc;
  padding: 1rem;
  background: orange;

  :hover{
    background: lightblue
  }
`;

const StyledReactButton = styled(Button)`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  border: 1px solid #ccc;
  padding: 1rem;
  background: orange;
  color:#FFE300;

  :hover{
    background: lightblue
  }
`;

const ButtonC = styled.button.attrs({
  className: 'btn'
})`

&.btn, &.btn-primary{
  color:#FFE300;
  background-color: #000;
  border-color: #E5E9F2;
  }

  &.btn:hover, &.btn-primary:hover{
    background-color:#4BD5EE;
    border-color: none;
    color:#FFE300;
  }
/* &&&{
  color:#FFE300;
  background-color: #000;
  border-color: #E5E9F2;

 :hover{
    background-color:#4BD5EE;
    border-color: none;
    color:red;
  }
} */

`;
const ButtonWithProps = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// A new component based on Button, but with some override styles
const TomatoButton = styled(ButtonWithProps)`
  color: tomato;
  border-color: tomato;
`;

class Test extends Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    return(
        <>
     <StyledButton>
        Hello
      </StyledButton>
      <StyledParagraph className="App">
        Paragraph
      </StyledParagraph>
      <StyledReactButton >
        ReactButton color:#FFE300;
      </StyledReactButton>
      <StyledReactButton color="primary">
        ReactButton
      </StyledReactButton>
      <Button color="danger">
        Unstyled button
      </Button>
      <ButtonC>
      ButtonC button
      </ButtonC>
      <ButtonC color="danger">
      ButtonC button
      </ButtonC>
      <ButtonWithProps >Normal</ButtonWithProps>
      <ButtonWithProps primary>Primary</ButtonWithProps>
      <TomatoButton >TomatoButton</TomatoButton>



      </>
    )
  
  }
}

export default Test;