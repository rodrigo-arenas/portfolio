import React from "react";
import Typewriter from "typewriter-effect";
import configData from "../../resources/configData";

const DynamicTyping = () => {
    return (
        <Typewriter
            options={{
                strings: configData.home.titles,
                autoStart: true,
                loop: true,
                deleteSpeed: 60
            }}
        />
    );
}

export default DynamicTyping;