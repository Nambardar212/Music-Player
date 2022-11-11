import React from "react";
import colors from "../../Utils/Colors";
import gradients from "../../Utils/Gradient";
import shadow from "../../Utils/Shadow";


const AboutButton = () => {
    return (
        <a className="button button-primary"
           style={{boxShadow: `${shadow(0,2,10,0, colors.pink)}`,
           background: `${gradients.magenta}`
           }}
           href="#"
        >
            View Portfolio
        </a>
    )
}


export default AboutButton;