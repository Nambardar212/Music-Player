import React from "react";
import SongInfoArtist from "../SongInfoData/SongInfoArtist";
import SongInfoTitle from "../SongInfoData/SongInfoTitle";


const SongInfo = ({songState}) => {
    return (
        <div className="song-info">
            <SongInfoTitle songState={songState} />
            <SongInfoArtist songState={songState} />
        </div>
    )
}

export default SongInfo;