import Badge from "react-bootstrap/Badge";
import "./Tags.css"

import React from 'react'

const Tags = (props) => {
    return (
        <div className={"tags"}>
            {props.tags.map((tag, i) => (
                <Badge
                    pill className={"tag mr-2 mb-2"}
                    key={props.id + i}
                    bg ={"secondary"}>
                    {tag}
                </Badge>
            ))}
        </div>
    )
}

export default Tags