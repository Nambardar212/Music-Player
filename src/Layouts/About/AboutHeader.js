import React from "react";
import AboutHeaderCloseIcon from "./AboutHeaderCloseIcon";
import AboutHeaderTitle from "./AboutHeaderTitle";


const AboutHeader = ({uiState, setUiState}) => {
    return (
        <nav className="nav__header">
            <AboutHeaderTitle />
            <AboutHeaderCloseIcon uiState={uiState} setUiState={setUiState} />
        </nav>
    )
}


export default AboutHeader;