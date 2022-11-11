import React from "react";
import LibraryHeaderCloseIcon from "./LibraryHeaderCloseIcon";
import LibraryHeaderTitle from "./LibraryHeaderTitle";


const LibraryHeader = ({uiState, setUiState}) => {
    return (
        <nav className="nav__header">
            <LibraryHeaderTitle />
            <LibraryHeaderCloseIcon uiState={uiState} setUiState={setUiState} />
        </nav>
    )
}

export default LibraryHeader;