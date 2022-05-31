import "./CardItem.css"
import React from 'react'

const CardIcons = (props) => {
    return (

        <ul className={"card__footer"}>
            {props.item.links.map((link) => (
                <li key={props.item.id + link.name} title={link.name}>
                    <a className={"card__btn"}
                       href={link.url}
                       target={props.item.target}
                       rel={"noopener noreferrer"}>
                        {link.icon}
                    </a>
                </li>
            ))}
        </ul>
    )

}

export default CardIcons