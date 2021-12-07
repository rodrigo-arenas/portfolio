import React from "react";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom"
import {AiOutlineGithub, AiFillHome, AiFillCode} from "react-icons/ai"
import {BsMedium} from "react-icons/bs"
import "./NavBar.css"

const SidebarItems = () => {

    const SidebarData = [
        {   id: 0,
            title: "Home",
            path: "/",
            icon: <AiFillHome/>,
            className: "nav-text"
        },
        {   id: 1,
            title: "Projects",
            path: "/projects",
            icon: <AiOutlineGithub/>,
            className: "nav-text"
        },
        {   id: 2,
            title: "Skills",
            path: "/skills",
            icon: <AiFillCode/>,
            className: "nav-text"
        },
        {   id: 3,
            title: "Blogs",
            path: "/blogs",
            icon: <BsMedium/>,
            className: "nav-text"
        }
    ]

    return (
        <Nav>
            {SidebarData.map((item) => (
                <Nav.Item>
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

export default SidebarItems