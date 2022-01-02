import React from "react";
import "./Skills.css"

const SkillsItems = (props) => {
    return (
        <ul className={"skill-icons"}>
            {props.config.map((item, index) => (
                            <li className={item.className} key={item.id}>
                                {item.icon}
                                <p className={item.className + "-text"}>
                                    {item.text}
                                </p>
                    </li>
                )
            )}
        </ul>
    )

}

export default SkillsItems