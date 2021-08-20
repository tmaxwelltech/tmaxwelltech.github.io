import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { NavLink as NLink }  from 'react-router-dom';

const MainNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/"><img
                src="/assets/images/logo.svg"
                height="50"
                width="50"
                alt="React Logo"
              /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
              <NLink to="/">Tyler Maxwell</NLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <NLink to="/about">About</NLink>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="#">Now</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Links
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                   <NavLink to="https://github.com/tmax818" target="_blank">GitHub</NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/resume" target="_blank">Resume</NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <NavLink href="#" target="_blank">Portfolio</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default MainNav;