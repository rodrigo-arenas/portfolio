import React from "react";

const About = () => {
    const about = "I've been working for over six years on data science projects. and keep " +
        "learning every single day."
    const aboutExit = "I'm fluent at Python, SQL databases, BI tools, and more, " +
        "with a deep interest in machine learning."

    return (
        <section id="about">
            <div className="card" style={{backgroundColor: "#263238"}}>
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
                    style={{
                        height: "auto",
                        fontSize: "132%",
                        lineHeight: "150%",
                        backgroundColor: "#D3E4CD",
                        color: "#8e8d8a"
                    }}
                >
                    <br/>
                    {about}
                    <br/>
                    {aboutExit}
                </div>
            </div>
        </section>
    );
}

export default About;