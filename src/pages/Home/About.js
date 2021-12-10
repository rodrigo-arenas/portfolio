import React from "react";
import homeConfig from "../../assets/configs/homeConfig";

const About = () => {
    const about = homeConfig.about.start
    const aboutExit = homeConfig.about.exit

    return (
        <section id="about">
            <div className="about-card" style={{backgroundColor: "#263238"}}>
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
                        backgroundColor: "#F6F6F6",
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