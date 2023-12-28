import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Tags from "../Tags/Tags";
import "./Timeline.css";

const Timeline = (props) => {
  const { items } = props || {};
  return (
    <VerticalTimeline>
      {items.map((item) => {
        const { id, date, icon, title, company, description, tags } =
          item || {};
        return (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={date}
            icon={icon}
            key={id}
          >
            <h2 className="vertical-timeline-element-title">
              <strong>{title}</strong>
            </h2>
            <h4 className="vertical-timeline-element-subtitle">{company}</h4>
            <p className="vertical-timeline-element-description">
              {description}
            </p>
            <Tags id={id} tags={tags}></Tags>
          </VerticalTimelineElement>
        );
      })}
    </VerticalTimeline>
  );
};

export default Timeline;
