import React from "react";

import {
    AiFillCode,
    AiFillHome,
    AiOutlineGithub
} from "react-icons/ai";
import {BsMedium} from "react-icons/bs";



const generalConfig = {

    sidebarData: [
        {
            id: "menu-0",
            title: "Home",
            path: "/",
            icon: <AiFillHome size={30}/>,
            className: "nav-text"
        },
        {
            id: "menu-1",
            title: "Projects",
            path: "/projects",
            icon: <AiOutlineGithub size={30}/>,
            className: "nav-text"
        },
        {
            id: "menu-2",
            title: "Skills",
            path: "/skills",
            icon: <AiFillCode size={30}/>,
            className: "nav-text"
        },
        {
            id: "menu-3",
            title: "Blogs",
            path: "/blogs",
            icon: <BsMedium size={30}/>,
            className: "nav-text"
        }
    ]

}

export default generalConfig
