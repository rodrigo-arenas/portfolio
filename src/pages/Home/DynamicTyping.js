import React from "react";
import Typewriter from "typewriter-effect";
import homeConfig from "../../resources/configs/homeConfig";

const DynamicTyping = () => {
    return (
        <Typewriter
            options={{
                strings: homeConfig.titles,
                autoStart: true,
                loop: true,
                deleteSpeed: 60
            }}
        />
    );
}

export default DynamicTyping;