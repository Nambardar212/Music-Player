import React from "react";


const LibrarySongTitle = ({song}) => {
    return (
        <h4 className="library_song-title">
            {song.title}
        </h4>
    )
}

export default LibrarySongTitle;