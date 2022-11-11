import React from "react";


const SongInfoTitle = ({songState}) => {
    return (
        <h1 className="song-info_title">
            {songState.currentSong[0].title} 
        </h1>
    )
}

export default SongInfoTitle;