import React from "react";
import "./Skills.css"

const SkillsItems = (props) => {
    return (
        <ul className={"skills-icons-ul"}>
            {props.config.map((item) => (
                            <li className={item.className} key={item.id}>
                                <p className={"p-skills"}>
                                    {item.icon}
                                </p>
                                <p className={"p" + item.className}>
                                    {item.text}
                                </p>
                    </li>
                )
            )}
        </ul>
    )

}

export default SkillsItems