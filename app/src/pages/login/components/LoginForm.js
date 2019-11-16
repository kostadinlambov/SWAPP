import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Input,
} from 'reactstrap';

import styled  from 'styled-components';
import ErrorMessage from '../../../components/ErrorMessage'

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: 'error',
      touched: {
        email: false,
        password: false,
      },
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    if (!this.canBeSubmitted()) {
      return;
    }

    const { email, password } = this.state;
    this.props.login({ variables: { email: email, password: password } });
  }

  canBeSubmitted() {
    const { email, password } = this.state;
    const errors = this.validate(email, password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  handleBlur = field => event => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate = (email, password) => {
    return {
      username: email.length === 0,
      password: password.length === 0,
    };
  };

  render() {
    return (
      <>
        <FormWrapper className="background-black">
          <StyledHeader>SWAPP</StyledHeader>
          <StyledForm onSubmit={this.onSubmitHandler}>
            <FormElementsWrapper>
            <ErrorMessage padding={'0 0 0.5rem 0'}>{this.props.errorMessage}</ErrorMessage>
              <div>
                <FormGroup>
                  <StyledInput
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
                    onChange={this.onChangeHandler}
                  />
                </FormGroup>
              </div>
              <div>
                <FormGroup>
                  <StyledInput
                    type="password"
                    name="password"
                    id="examplePassword"
                    placeholder="********"
                    onChange={this.onChangeHandler}
                  />
                </FormGroup>
              </div>
               <div className="text-align-right">
                 <StyledButton>Login</StyledButton>
              </div>
            </FormElementsWrapper>
            
          </StyledForm>
        </FormWrapper>
      </>
    );
  }
}

export default LoginForm;

// Styled Components
const FormWrapper = styled.div`
  width: 40%;
  margin: auto;
  padding: 0 1rem 1rem;
  margin: 3rem auto;
  @media (max-width: 1200px) {
    width: 50%;
    margin: 3rem auto;
  }

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 600px) {
    width: 80%;
    margin: 3rem auto;
  }
`;

const FormElementsWrapper = styled.div`
  width: 90%;
  margin: auto;
  position: relative;

  .text-align-right{
    text-align:right
  }
`;

const StyledForm = styled(Form)`
  border-color: ${props => props.theme.cards.borderColor};
  background-color: ${props => props.theme.cards.backgroundColor};
  padding: 2.5rem 1rem 1.2rem;
  border-radius: 10px;
`;

const StyledButton = styled.button`
  background-color: ${props => props.theme.solidButton.backgroundColor};
  border-color: ${props => props.theme.solidButton.borderColor};
  color: ${props => props.theme.solidButton.color};
  padding: 0.2rem 1rem;
  font-weight: bold;
  outline: none;
  border-radius: 5px;
  border: none;
  text-align: right;

  :hover {
    cursor: pointer;
  }
`;

const StyledHeader = styled.h2`
  color: #ffe300;
  font-family: 'SfDistantGalaxy';
  font-size: 6rem;
  text-align: center;
  line-height: 1;
  margin-bottom: 0;

  @media (max-width: 1000px){
    font-size: 4rem;
  }

  @media (max-width: 768px){
    font-size: 3rem;
  }

  @media (max-width: 600px){
    font-size: 2rem;
  }

`;

const StyledInput = styled(Input)`
  &.form-control {
    background-color: ${props => props.theme.input.backgroundColor};
    border-color: ${props => props.theme.input.borderColor};
    color: ${props => props.theme.input.color};
    width: 92%;
    padding: .125rem .75rem;
    margin: auto;
    line-height: 0.8;
  }
`;