import React from "react";
import {AiFillCode, AiFillHome, AiOutlineGithub} from "react-icons/ai";
import {BsMedium} from "react-icons/bs";


const configData = {
    home: { greeting:
            <h1 className="heading">
                Hi!, I'm <strong className="main-name"> Rodrigo Arenas</strong>
            </h1>,
        titles: [
            "Data Scientist",
            "Machine Learning Specialist",
            "Open Source Contributor",
            "Backend Developer"
        ]},
    sidebarData: [
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

}

export default configData