import React from "react";
import {
    VerticalTimeline, VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Tags from "../Tags/Tags";
import "./Timeline.css"


const Timeline = (props) => {
    return (
        <VerticalTimeline>
            {props.items.map((item) => (
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={item.date}
                    icon={item.icon}
                    key={item.id}
                >
                    <h2 className="vertical-timeline-element-title">
                        <strong>{item.title}</strong>
                    </h2>
                    <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
                    <p className={"vertical-timeline-element-description"}>
                        {item.description}
                    </p>
                        <Tags id={item.id}
                              tags={item.tags}>
                        </Tags>

                </VerticalTimelineElement>
            ))
            }
        </VerticalTimeline>
    )

}

export default Timeline