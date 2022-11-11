import React from "react";
import {RiCloseFill} from "react-icons/ri";


const AboutHeaderCloseIcon = ({uiState, setUiState}) => {
    
    const aboutCloseHandler = () => {
        setUiState({ ...uiState, aboutShow: false})
    }

    return (
        <RiCloseFill className="menu__icon" onClick={aboutCloseHandler} />
    )
}


export default AboutHeaderCloseIcon;