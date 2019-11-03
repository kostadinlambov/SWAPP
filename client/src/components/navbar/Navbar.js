import React, { useState } from 'react';
import { NavLink  as RRNavLink} from 'react-router-dom';
import styles, {withTheme} from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const Styles = styles.div`
.navbar{
  background-color: ${props => props.theme.appBar.backgroundColor};
  border-color: ${props => props.theme.appBar.borderColor};
  color: ${props => props.theme.appBar.color}
}

.bg-navcolor{
  color: #4BD5EE

  &:hover {
    color: white
  }
}

.navbar-toggler-icon{
  color: #4BD5EE;
  background-color: #4BD5EE;
}
`

const StyledNavbarBrand = styles(NavbarBrand)`
&.navbar{
  background-color: ${props => props.theme.appBar.backgroundColor};
  border-color: ${props => props.theme.appBar.borderColor};
  color: #FFE300;
  font-family: "SfDistantGalaxy";
  font-size: 2rem;
}
`
const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  // console.log(props.theme);
  // console.log('appBar.backgroundColor:', props.theme.appBar.backgroundColor);
  // console.log('appBar.borderColor:', props.theme.appBar.borderColor);
  // console.log('appBar.color:', props.theme.appBar.color);
  // debugger;

  return (
    <Styles >
      <Navbar  expand="md"  >
        <StyledNavbarBrand tag={RRNavLink} exact to="/"  className="navbar" onClick={props.changeTheme} >SWAPP</StyledNavbarBrand>
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

export default withTheme(NavbarComponent);
