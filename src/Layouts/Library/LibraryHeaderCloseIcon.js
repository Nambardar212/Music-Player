import React from "react";
import {RiCloseFill} from "react-icons/ri";


const LibraryHeaderCloseIcon = ({uiState, setUiState}) => {

    const libraryCloseHandler = () => {
        setUiState({ ...uiState, libraryShow: false})
    }

    return (
        <RiCloseFill className="library_menu-icon"
          onClick={libraryCloseHandler}
        />
    )
}

export default LibraryHeaderCloseIcon;