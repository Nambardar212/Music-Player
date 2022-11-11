import React from "react";
import LibraryHeader from "./LibraryHeader";
import LibraryListItem from "./LibraryListItem";


const Library = ({uiState, setUiState, songState, setSongState, songData, audioRef}) => {
    return (
        <div className={`library ${uiState.libraryShow ? "" : "library-hidden"}`}>
            <LibraryHeader uiState={uiState} setUiState={setUiState} />
            <div className="library-wrapper">
                {
                    songData.map((song) => (
                        <LibraryListItem 
                           song={song}
                           songState={songState}
                           setSongState={setSongState}
                           audioRef={audioRef}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Library;