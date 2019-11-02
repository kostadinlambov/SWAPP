import React, { Component } from 'react';
import styled from 'styled-components';
import {StyledParagraph} from './StyledComponents/StyledComponents';
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

  :hover{
    background: lightblue
  }
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
      <StyledParagraph>
        Paragraph
      </StyledParagraph>
      <StyledReactButton color="primary">
        ReactButton
      </StyledReactButton>
      <Button color="danger">
        Unstyled button
      </Button>
      </>
    )
  
  }
}

export default Test;