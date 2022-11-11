import React from "react";
import colors from "../Utils/Colors";


const SongInfoArtist = ({songState}) => {
    return (
        <h1 className="song-info_artist" style={{color: `${colors[songState.currentSong[0].palette]}`}}>
            {songState.currentSong[0].artist}
        </h1>
    )
}

export default SongInfoArtist;