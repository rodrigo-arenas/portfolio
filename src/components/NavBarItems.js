import React from "react";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom"
import "./NavBar.css"
import generalConfig from "../resources/configs/generalConfig";

const NavBarItems = () => {
    return (
        <Nav>
            {generalConfig.sidebarData.map((item) => (
                    <Nav.Item key={item.id}>
                        <Nav.Link as={Link} to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Nav.Link>
                    </Nav.Item>

                )
            )}
        </Nav>
    )
}

export default NavBarItems