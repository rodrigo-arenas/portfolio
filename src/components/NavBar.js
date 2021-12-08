import React, {useState} from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {AiOutlineMenu} from "react-icons/ai"

import NavBarItems from "./NavBarItems";
import "./NavBar.css"

const NavBar = () => {

    const [expanded, setExpanded] = useState(false);

    const handleSelection = () => {
        setExpanded(false)
    }


    return (
        <Navbar className={"navbar"} expand={'sm'} expanded={expanded}>
            <Container fluid>
                <Navbar.Toggle
                    aria-controls='responsive-navbar-nav'
                    onClick={() => setExpanded(expanded ? false : "expanded")}>
                    <AiOutlineMenu className="toggle-icon"/>
                </Navbar.Toggle>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <NavBarItems onSelection={handleSelection}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>)

}

export default NavBar
