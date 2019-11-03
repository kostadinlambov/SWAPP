import React, { useState } from 'react';
import { NavLink  as RRNavLink} from 'react-router-dom';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const Styles = styled.div`
.navbar{
  background-color: ${props => props.theme.appBar.backgroundColor};
  border-color: ${props => props.theme.appBar.borderColor};
  color: ${props => props.theme.appBar.color}
};

.bg-navcolor{
  color: #4BD5EE;

  &:hover {
    color: white
  }
};

.navbar-toggler-icon{
  color: #4BD5EE;
  background-color: #4BD5EE;
}
`;

const StyledNavbarBrand = styled.div`
  &.theme-toggler{
    background-color: ${props => props.theme.appBar.backgroundColor};
    border-color: ${props => props.theme.appBar.borderColor};
    color: #FFE300;
    font-family: "SfDistantGalaxy";
    font-size: 2rem;
  }

  &:hover{
    cursor: pointer;
  }
`
const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Styles >
      <Navbar expand="md">
        <StyledNavbarBrand  className="theme-toggler" onClick={props.changeTheme} >SWAPP</StyledNavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={RRNavLink}  exact to="/episodes" className="navbar">Episodes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink}  exact to="/characters" className="navbar">Characters</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </Styles>
  );
};

export default NavbarComponent;