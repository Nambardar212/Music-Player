import React from "react";
import MenuIcon from "../MenuData/MenuIcon";
import MenuTitle from "../MenuData/MenuTitle";


const MenuHeader = ({uiState, setUiState}) => {
    return (
        <nav className="nav__header">
            <MenuTitle />
            <MenuIcon uiState={uiState} setUiState={setUiState} />
        </nav>
    )
}

export default MenuHeader;