import React, { Component } from 'react';
import {
  Col,
  Form,
  FormGroup,
  Input,
} from 'reactstrap';

import styled, { withTheme } from 'styled-components';

const FormWrapper = styled.div`
  width: 40%;
  margin: auto;
  padding: 0 1rem 1rem;
  margin-top: 2rem;
`;

const FormElementsWrapper = styled.div`
  width: 90%;
  margin: auto;

  .text-align-right{
    text-align:right
  }
`;

const StyledForm = styled(Form)`
  border-color: ${props => props.theme.cards.borderColor};
  background-color: ${props => props.theme.cards.backgroundColor};
  padding: 2.5rem 1rem 1rem;
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

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      touched: {
        username: false,
        password: false,
      },
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onChangeHandler(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    if (!this.canBeSubmitted()) {
      return;
    }

    const { username, password } = this.state;
    // this.props.login(username, password);
  }

  canBeSubmitted() {
    const { username, password } = this.state;
    const errors = this.validate(username, password);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  handleBlur = field => event => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate = (username, password) => {
    return {
      username: username.length === 0,
      password: password.length === 0,
    };
  };

  render() {
    console.log(this.props.theme);
    console.log('backgroundColor: ', this.props.theme.input.backgroundColor);
    console.log('borderColor: ', this.props.theme.input.borderColor);
    console.log('color: ', this.props.theme.input.color);
    console.log(
      'cards backgroundColor: ',
      this.props.theme.cards.backgroundColor,
    );
    console.log('cards borderColor: ', this.props.theme.cards.borderColor);

    return (
      <>
        <FormWrapper className="background-black">
          <StyledHeader>SWAPP</StyledHeader>
          <StyledForm>
            <FormElementsWrapper>
              <div>
                <FormGroup>
                  <StyledInput
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="myemail@email.com"
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

// export default LoginForm;
export default withTheme(LoginForm);
