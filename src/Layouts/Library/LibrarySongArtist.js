import React from "react";


const LibrarySongArtist = ({song}) => {
    return (
        <h4 className="library_song-artist">
            {song.artist}
        </h4>
    )
}


export default LibrarySongArtist;