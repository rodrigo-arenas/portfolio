import Badge from "react-bootstrap/Badge";
import "./Tags.css";

import React from "react";

const Tags = (props) => {
  const { tags, id } = props || {};
  return (
    <div className={"tags"}>
      {tags &&
        tags.map((tag, index) => (
          <Badge
            pill
            className={"tag mr-2 mb-2"}
            key={id + index}
            bg={"secondary"}
          >
            {tag}
          </Badge>
        ))}
    </div>
  );
};

export default Tags;
