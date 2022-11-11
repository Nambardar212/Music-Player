import React from "react";
import colors from "../../Utils/Colors";
import shadow from "../../Utils/Shadow";


const LibrarySongCover = ({song}) => {
    return (
        <figure className="library_song-cover">
            <img 
                src={`${song.thumbUrl}`}
                alt="ArtWork"
                className="library-song-cover-art"
                style={{
                    boxShadow: `${shadow(0,0,15,0, colors[song.palette])}`
                }}
            />
        </figure>
    )
}


export default LibrarySongCover;