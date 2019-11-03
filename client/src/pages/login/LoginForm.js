import React, { Component } from 'react';
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
} from 'reactstrap';

import styled from 'styled-components';
const Styles = styled.div`
width: 30%;
margin: auto;

.submit-btn{
  color:#FFE300;
  background-color:#000;
  border-color: #E5E9F2;

  &:hover{
    color:#FFE300;
    background-color:#4BD5EE;
    border-color: none
  }
}

.navbar-toggler-icon{
  color: #4BD5EE;
  background-color: #4BD5EE;
}
`;

const ButtonC = styled.button.attrs({
  className: 'btn btn-primary'
})`
&&&{
  color:#FFE300;
  background-color: #000;
  border-color: #E5E9F2;

 :hover{
    background-color:#4BD5EE;
    border-color: none;
    color:#FFE300;
  }
}
`;

const StyledReactButton = styled(Button)`
  /* width: 90%; */
  /* max-width: 40rem; */
  margin: 2rem auto;
  padding: 1rem;
  color: red;
  background-color:#000;
  border-color: #E5E9F2;

  :hover{
    color:#FFE300;
    background-color:#4BD5EE;
    border-color: none
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
    return (
      <> 
      <Styles>
        <Container className="App">
          <h2>Sign In</h2>
          <Form className="form">
            <Col>
              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                />
                <FormText>Your username is most likely your email.</FormText>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                />
              </FormGroup>
            </Col>
            <StyledReactButton>Login</StyledReactButton>
          </Form>
        </Container>
      </Styles>
      <ButtonC className="submit-btn" >Login</ButtonC>
      </>
    );
  }
}

export default LoginForm;
