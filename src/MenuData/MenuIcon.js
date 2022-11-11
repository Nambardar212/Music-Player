import React from "react";
import { RiMenu4Fill } from "react-icons/ri";


const MenuIcon = ({uiState, setUiState}) => {

    const handleNav = () => {
        // console.log("nik");
        setUiState({...uiState, aboutShow: true});
    }

    return (
        <RiMenu4Fill className="menu__icon" onClick={handleNav} />
    )
}

export default MenuIcon;