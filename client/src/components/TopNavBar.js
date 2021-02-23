import React, { useState } from 'react';
import {  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText} from 'reactstrap'

function TopNavBar(){

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
     
    return (
    <div>
        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Gym Notepad</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink target="_blank" href="https://github.com/msierrawd/mod3prj">GitHub</NavLink>
            </NavItem>
            </Nav>
            <NavbarText> Have a good workout :)</NavbarText>
        </Collapse>
        </Navbar>
    </div>
    );
}

export default TopNavBar;