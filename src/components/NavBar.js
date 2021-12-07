import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {AiOutlineMenu} from "react-icons/ai"

import SidebarItems from "./SidebarItems";
import "./NavBar.css"

const NavBar = () => {


    return (
        <Navbar className={"navbar"} collapseOnSelect fixed={'top'} expand={'sm'}>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'>
                    <AiOutlineMenu className="toggle-icon"/>
                </Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <SidebarItems/>
                </Navbar.Collapse>
            </Container>
        </Navbar>)

}

export default NavBar
