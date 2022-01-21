import React from "react";

import "../styles/hero.scss";

const Hero = (props) => {
    return (
        <div
            className="hero"
            style={{ backgroundImage: `url(${props.background})` }}
        >
            {props.children}
        </div>
    );
};

export default Hero;
