import React from "react";

const About = (props) => {
  const { about } = props || {};
  const { start, exit } = about || {};

  const aboutCardStyle = {
    backgroundColor: "#263238",
  };

  const cardHeaderStyle = {};

  const cardBodyStyle = {
    height: "auto",
    fontSize: "132%",
    lineHeight: "150%",
    backgroundColor: "#F6F6F6",
    color: "#8e8d8a",
    padding: "2rem",
  };

  return (
    <section id="about">
      <div className="about-card" style={aboutCardStyle}>
        <div className="card-header">
          <span
            className="iconify"
            data-icon="emojione:red-circle"
            data-inline="false"
          />{" "}
          &nbsp;{" "}
          <span
            className="iconify"
            data-icon="twemoji:yellow-circle"
            data-inline="false"
          />{" "}
          &nbsp;{" "}
          <span
            className="iconify"
            data-icon="twemoji:green-circle"
            data-inline="false"
          />
        </div>
        <div
          className="card-body font-trebuchet text-justify ml-3 mr-3"
          style={cardBodyStyle}
        >
          {start}
          <br />
          {exit}
        </div>
      </div>
    </section>
  );
};

export default About;
